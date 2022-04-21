const express = require("express");
const Joi = require("joi");
const router = express.Router();
router.use(express.json());

let client_data = [];

router.get("/clientData", (req, res) => {
  res.send(client_data);
});

router.post("/clientData", (req, res) => {
  console.log(req.body);
  const schema = Joi.object({
    originalPrice: Joi.number().required(),
    askPrice: Joi.number().required(),
    closedPrice: Joi.number().required(),
    totalAreaInSquareFt: Joi.number().required(),
    address: Joi.string().required(),
    property_category: Joi.string().required(),
    perSqprice: Joi.number().required(),
    name: Joi.string().required(),
    clientContact: Joi.number().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  console.log();

  const clientData = {
    id: client_data.length + 1,
    originalPrice: parseInt(req.body.originalPrice),
    askPrice: parseInt(req.body.askPrice),
    closedPrice: parseInt(req.body.closedPrice),
    totalAreaInSquareFt: parseInt(req.body.totalAreaInSquareFt),
    address: req.body.address,
    property_category: req.body.property_category,
    clientName: req.body.name,
    clientContact: parseInt(req.body.clientContact),
  };
  client_data.push(clientData);
  res.send(clientData);
});

module.exports = router;
