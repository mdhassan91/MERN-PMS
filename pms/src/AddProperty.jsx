import FileUpload from "./FileUpload";
import React, { useContext, useState,useEffect} from "react";
import { PropertyContext } from "./App";
import axios from 'axios'



const AddProperty = () => {

  const {propertyData} = useContext(PropertyContext);
  const {setPropertyData} = useContext(PropertyContext);
  const [imgArr,setImgArr]=useState([])
  const [addProperty,setAddProperty] =useState({
    
    totalAreaInSquareFt:"",
    perSqprice:"",
    totalPrice:"",
    address:"",
    property_category:"",
   
 });
 

 const {totalAreaInSquareFt,perSqprice,totalPrice,address,property_category,} =addProperty;

 const onInputChange = (e) => {
  setAddProperty({ ...addProperty, [e.target.name]: e.target.value });
};


const ImgSet=(imgDetails)=>{ 
console.log(imgDetails);
console.log(imgArr);
}



const onSubmit= async (e) =>{
  e.preventDefault();
  // const formData=new FormData();
  // console.log(formData);
  console.log({propertyData});
  console.log({img:imgArr});
  console.log(addProperty);
  const updatedProperty={...addProperty,img:imgArr};
   console.log(updatedProperty);
//propertyData.push(addProperty.img=imgArr)
const res= await axios.post("http://localhost:5000/property",updatedProperty);
console.log(res);
console.log(res.data);
setPropertyData(res.data)
}
//console.log(">>>>>",propertyData);

    return ( <>
    
<div className="container flex">
   <div>
   <form onSubmit={(e) => onSubmit(e)} >
        <div className="flex items-center justify-center h-screen bg-gray-100 w-full ">
          <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
            <h1 className="text-center text-lg font-bold text-gray-500">
              Add Property
            </h1>
            <div className="space-y-4 mt-6">
              <div className="w-full flex mb-4 mx-3">
              <label className="inline mx-2  text-gray-700 text-md font-bold mb-2" htmlFor="address">
    Address
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" 
      placeholder="Address" name="address" value={address}  onChange={(e) => { onInputChange(e);}} />
            </div>
            <div className="w-full flex mb-4 mx-3">
              <label className="inline mx-2  text-gray-700 text-md font-bold mb-2" htmlFor="username">
     Total Area in Sqft
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" 
      placeholder="Total Area In Sqft" name="totalAreaInSquareFt" value={totalAreaInSquareFt} onChange={(e) => { onInputChange(e);}}/>
            </div>
            <div className="w-full flex mb-4 mx-3">
              <label className="inline mx-2  text-gray-700 text-md font-bold mb-2" htmlFor="username">
        Per Sqft Price
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" 
      placeholder="Per Sqft Price"  name="perSqprice"   value={perSqprice} onChange={(e) => { onInputChange(e);}}/>
            </div>
            <div className="w-full flex mb-4 mx-3">
              <label className="inline mx-2  text-gray-700 text-md font-bold mb-2" htmlFor="username">
        Property Category
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"
       placeholder="Price Category" name="property_category"       value={property_category} onChange={(e) => { onInputChange(e);}}/>
            </div>
            <div className="w-full flex mb-4 mx-3">
              <label className="inline mx-2  text-gray-700 text-md font-bold mb-2" htmlFor="username">
        Total Price
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"
       placeholder="Total Price " name="totalPrice"    value={totalPrice} onChange={(e) => { onInputChange(e);}}/>
            </div>
            <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
              Add Property
            </button>
          </div>
        </div>
        </div>
      
      </form>

   </div>
  <div>
<FileUpload imgArr={imgArr} setImgArr={setImgArr} ImgSet={ImgSet} />
  </div>
 </div>
    </> );
}
 
export default AddProperty;