import { PropertyContext } from "./App";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

import RenderSalesDetails from "./RenderSalesDetails";

const Sale = () => {
  const [sold,setSold] = useState([]);
  const {propertyData} = useContext(PropertyContext);
  const [clientData, setClientData] = useState([]);

//   useEffect(() =>{
// let filterPropertyStatus = propertyData.filter(
//     (property) => property.propertySoldStatus === true
//   );
//   setSold(filterPropertyStatus);
 
//   },[])
useEffect(() => {
  loadClients();
}, []);

const loadClients = async () => {
  const response = await axios.get(`http://localhost:5000/clientData`);
  setClientData(response.data);
};
 const onSoldClick=()=>{
  console.log(sold);
 }
  // console.log(propertyData);
//  let revenue=sold.reduce((revenue,property)=>{
//   let totalRevenue=property.totalPrice;
//    return revenue+totalRevenue;
//  },0)

//  let profit=revenue*(30/100);
//  let tax=profit -profit*(12/100);
    return ( <>
{/* <div>
<div>
  <h1>Total Property Sales :{sold.length}</h1>  
  <h1>Total Revenue: {revenue}</h1>
  <h1>Total Profit: {profit} </h1>
  <h1>Profit After Tax: {tax}</h1>
  <button onClick={onSoldClick}>Console</button>
</div>

</div> */}

{clientData.length>0?(<RenderSalesDetails clientData={clientData} setClientData={setClientData} sold={sold}/>):<h1>No Sales Data To Display Yet</h1>}
    
    </>);
}
 
export default Sale;