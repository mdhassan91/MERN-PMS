import RenderClientData from "./RenderClientData";
import { useState, useEffect,  } from "react";
import axios from "axios";

const ClientDetail = () => {
    const [clientData, setClientData] = useState([]);
  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const response = await axios.get(`http://localhost:5000/clientData`);
    setClientData(response.data);
   
  };
    console.log(clientData);
    return (<>
<div className="flex flex-col">
<table>
<thead>
    <tr className="bg-gray-200">
<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Sr</th>
<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Client Name</th>
<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Contact Info</th>
<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Property Type</th>
<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Address</th>
<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Price</th>
<th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Closed Price</th>
 </tr>
</thead>
<tbody className="bg-white divide-y divide-gray-300">
  {clientData.length>0?<RenderClientData clientData={clientData} setClientData={setClientData}/>:""}

</tbody>

</table>




</div>
    
    </>  );
}
 
export default ClientDetail;