import {useState,useEffect} from 'react'
import axios from 'axios'



const FileUpload = ({imgArr,setImgArr,ImgSet}) => {
    const [file,setFile]=useState('');
    const[filename,setFilename]=useState('Choose File');
    const[uploadedFile,setUploadedFile]=useState({})
    // const [imgArr,setImgArr]=useState([])
   
   
    const imgPush=()=>{
       
       // setImgArr(uploadedFile.filePath);
        console.log( "Helloji Namaste");
        if(filename==='Choose File'){
            console.log(">>>>>>>>Please Choose Image");
        }
        else{
            //imgArr.push(`/images/${filename}`);
            console.log(imgArr);
        }
      ;
       // console.log();
    }

    const InputChange=(e)=>{
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
        setFilename(e.target.files[0].name)
        console.log(e.target.files[0].name);
     //   setImgArr([`/images/${e.target.files[0].name}`])
        setImgArr(prevState => [...prevState,`/images/${e.target.files[0].name}`]);
        ImgSet("Image is here")
    }





    const onSubmit = async (e)=>{
 e.preventDefault();
const formData=new FormData();
formData.append("file",file)
console.log(formData);

try{
    const res=await axios.post(`http://localhost:5000/upload`,formData,{
        headers: {'Content-Type': 'multipart/form-data'}
    });
    const {fileName,filePath}=res.data;
    setUploadedFile({fileName,filePath})
    

console.log(uploadedFile);


}catch(err){
if(err.response.status===500){
    console.log("Server Problem");
}else{
    console.log(err.response.data.msg);
}

}
  

console.log(imgArr);

}

    return (  <>
       <div className="flex justify-center">
  <div className="mb-3 w-96">
      <form onSubmit={(e)=>{onSubmit(e)}}>
    <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">{filename}</label>
    <input className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
    type="file" id="formFile"
    onChange={(e)=>InputChange(e)}/>
    <input type ="submit" value = "Upload"/>
  </form>

  {uploadedFile?<div>
      <h1>{uploadedFile.fileName}</h1>
      <img src={uploadedFile.filePath} alt="upload"/>
  </div>:null}
  </div>
</div>
    </>);
}
 
export default FileUpload;