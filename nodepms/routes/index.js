const express = require("express");
const Joi = require("joi");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.send("Welcome to demo ");
});

const data = [
  {
    id: 1,
    totalAreaInSquareFt: 392040,
    perSqprice: 57,
    totalPrice: 22500000,
    propertySoldStatus: false,
    address: "Kelzar,Wardha Road,Nagpur,Maharastra.",
    property_category: "Land-Property",
    img: ["./images/landimg1.jpeg", "./images/landimg2.jpeg"],
    imgIndex: 0,
  },
  {
    id: 2,
    totalAreaInSquareFt: 1500,
    perSqprice: 4588,
    totalPrice: 10000000,
    propertySoldStatus: false,
    address: "Jaripataka.Behind Haldiram,Nagpur",
    property_category: "Residencial-Property",
    img: [
      "./images/dupleximg1.jpg",
      "./images/dupleximg2.jpg",
      "./images/dupleximg3.jpg",
      "./images/dupleximg4.jpg",
      "./images/dupleximg5.jpg",
      "./images/dupleximg6.jpg",
      "./images/dupleximg7.jpg",
      "./images/dupleximg8.jpg",
      "./images/dupleximg9.jpg",
      "./images/dupleximg10.jpg",
      "./images/dupleximg11.jpg",
      "./images/dupleximg12.jpg",
    ],
    imgIndex: 0,
  },
  {
    id: 3,
    totalAreaInSquareFt: 3000,
    perSqprice: 4666,
    totalPrice: 14200000,
    propertySoldStatus: false,
    address: "Mihan,Behind TCS,Nagpur",
    property_category: "Commercial-Property",
    img: [
      "./images/apartmentimg1.jpeg",
      "./images/apartmentimg2.jpeg",
      "./images/apartmentimg3.jpeg",
      "./images/apartmentimg4.jpeg",
      "./images/apartmentimg5.jpeg",
      "./images/apartmentimg6.jpeg",
      "./images/apartmentimg7.jpeg",
      "./images/apartmentimg8.jpeg",
      "./images/apartmentimg9.jpeg",
      "./images/apartmentimg10.jpeg",
    ],
    imgIndex: 0,
  },
];
router.get("/property", (req, res) => {
  res.send(data);
});

router.get("/property/:id", (req, res) => {
  const { id } = req.params;
  const propertyData = data.find((property) => property.id === parseInt(id));
  if (!propertyData) return res.status(404).send("Property Data not found");
  res.send(propertyData);
});
router.post("/property", (req, res) => {
  console.log(req.body);
  const schema = Joi.object({
    totalAreaInSquareFt: Joi.number().required(),
    perSqprice: Joi.number().required(),
    totalPrice: Joi.number().required(),
    address: Joi.string().required(),
    property_category: Joi.string().required(),
    img: Joi.array().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  console.log();

  const propertyData = {
    id: data.length + 1,
    totalAreaInSquareFt: req.body.totalAreaInSquareFt,
    perSqprice: req.body.perSqprice,
    totalPrice: req.body.totalPrice,
    propertySoldStatus: req.body.propertySoldStatus,
    address: req.body.address,
    property_category: req.body.property_category,
    img: req.body.img,
    imgIndex: 0,
  };
  data.push(propertyData);
  res.send(data);
});

router.put("/property/:id", (req, res) => {
  const propertyData = data.find((user) => user.id === parseInt(req.params.id));
  propertyData.propertySoldStatus = true;
  if (!propertyData) return res.status(404).send("Property not found");
  const error = validatePropertyData(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  //  user.name = req.body.name;
  res.send(data);
});

function validatePropertyData(body) {
  const schema = Joi.object({
    id: Joi.number(),
    totalAreaInSquareFt: Joi.number(),
    perSqprice: Joi.number(),
    totalPrice: Joi.number(),
    address: Joi.string(),
    property_category: Joi.string(),
    propertySoldStatus: Joi.boolean(),

    img: Joi.array(),
  });
  const { error } = schema.validate(body);
  return error;
}

module.exports = router;
