const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path')
const app = express();
var cors = require('cors')
const port=5000;
const index = require('./routes')
const login = require('./routes/login')
const clientData = require('./routes/client-data')
app.use(fileUpload());
app.use(cors())

app.use("/",index);
app.use("/",login);
app.use("/",clientData);
app.post("/upload", (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: "No file Upload" });
    }
    const file = req.files.file;
  const pathName=  path.join(__dirname,  `../pms/public/images/`, file.name) 
  
    file.mv(
  pathName,
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
  
        res.json({ fileName: file.name, filePath: `/images/${file.name}` });
      }
    );
  });

app.listen(port ,()=> console.log(`Server is listening on ${port}`)) 



