import { useContext, useState, useEffect } from "react";
import { PropertyContext } from "./App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ClientSoldDetail = ({ propertyId, onClickUpdatedClientData }) => {
  const [propertyClickData, setPropertyClickData] = useState();
  const { propertyData } = useContext(PropertyContext);
  const { setPropertyData } = useContext(PropertyContext);
  const { setDisplayProperties } = useContext(PropertyContext);
  const [clientData, setClientData] = useState({
    originalPrice: "",
    askPrice: "",
    closedPrice: "",
    name: "",
    clientContact: "",
  });
  let navigate = useNavigate();
  console.log(propertyId);

  useEffect(() => {
    loadPropertys();
  }, []);

  const loadPropertys = async () => {
    const response = await axios.get(
      `http://localhost:5000/property/${propertyId}`
    );
    console.log(response.data);
    setPropertyClickData(response.data);
  };

  const onPropertyStatusClick = async () => {
    // const newPropertyData = [...propertyData];
    // const index = propertyData.findIndex(
    //   (property) => property.id === propertyId
    // );
    // console.log(`index>>>`, index);
    // newPropertyData[index].propertySoldStatus = true;
    // setDisplayProperties(newPropertyData);
    // setPropertyData(newPropertyData);

    const newPropertyEditedData = propertyData.find(
      (property) => property.id === propertyId);
    let updatedPropertyData = {
      ...newPropertyEditedData,
      propertySoldStatus: true,
    };
    console.log(updatedPropertyData);

    const response = await axios.put(
      `http://localhost:5000/property/${propertyId}`,
      updatedPropertyData
    );
    console.log(response.data);
    setDisplayProperties(response.data);
    setPropertyData(response.data);
    console.log(response.data);
  };
  const { askPrice, closedPrice, name, clientContact } = clientData;

  const onInputChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const clientDataResquestPost = async (clientData) => {
    const res = await axios.post(
      "http://localhost:5000/clientData",
      clientData
    );
    console.log(res);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(clientData);
    let updatedClientData = {
      ...clientData,

      originalPrice: propertyClickData.totalPrice,
      totalAreaInSquareFt: propertyClickData.totalAreaInSquareFt,
      perSqprice: propertyClickData.perSqprice,
      address: propertyClickData.address,
      property_category: propertyClickData.property_category,
    };

    console.log(updatedClientData);
    onPropertyStatusClick();

    // console.log(res);
    // onClickUpdatedClientData(updatedClientData);
    clientDataResquestPost(updatedClientData);
    navigate("../Property", { replace: true });
  };

  console.log(propertyClickData);

  return (
    <>
      {/* <h1>Client </h1>
    <h1>Price : {propertyClickData? propertyClickData.totalPrice :"0"}</h1>
    <button onClick={()=>{ onPropertyStatusClick()}}>Click Me</button> */}
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
            <h1 className="text-center text-lg font-bold text-gray-500">
              Property Sold Data
            </h1>
            <div className="space-y-4 mt-6">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Original Price"
                  value={`Rs.${
                    propertyClickData ? propertyClickData.totalPrice : ""
                  }`}
                  name="originalPrice"
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter Client Ask Price"
                  value={askPrice}
                  name="askPrice"
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter Closed Price"
                  value={closedPrice}
                  name="closedPrice"
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                  className="px-4 py-2 bg-gray-50"
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter Client Name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Contact Number"
                  value={clientContact}
                  name="clientContact"
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
            </div>
            <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
              Add Property Sold Data
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ClientSoldDetail;
