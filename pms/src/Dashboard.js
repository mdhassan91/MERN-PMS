import { MdHomeWork } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { useContext, useState, useEffect } from "react";
import { PropertyContext } from "./App";
import axios from "axios";

const Dashboard = () => {
  const { propertyData } = useContext(PropertyContext);
  const [clientData, setClientData] = useState([]);
  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const response = await axios.get(`http://localhost:5000/clientData`);
    setClientData(response.data);
  };

  let revenue = clientData.reduce((revenue, client) => {
    let totalRevenue = parseInt(client.closedPrice);
    return revenue + totalRevenue;
  }, 0);

  let profit = revenue * (30 / 100);
  let tax = profit - profit * (12 / 100);

  return (
    <>
      <section className="text-gray-400 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <p className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">
              PMS Dashboard
            </p>
            <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
              Welcome to our PMS Dashboard.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-red-400 mb-4">
                  <span className="w-6 h-6 text-2xl">
                    <MdHomeWork />
                  </span>
                </div>
                <h2 className="text-lg text-black font-medium title-font mb-2">
                  Total Property
                </h2>
                <p className="  text-black ">
                  Total Property:{propertyData.length}
                </p>
                <p className="  text-black ">
                  Total Sold Property:{clientData.length}
                </p>
                <p className="  text-black ">
                  Total Unsold Property:
                  {propertyData.length - clientData.length}
                </p>
                
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                  <span className="w-6 h-6 text-2xl">
                    <FcSalesPerformance />
                  </span>
                </div>
                <h2 className="text-lg text-black font-medium title-font mb-2">
                  Sales Performence
                </h2>
               
             
                <p className="  text-black ">
                  Total Property Sales:{clientData.length}
                </p>

                <p className="text-black">Total Revenue: {revenue}</p>
                <div className="">
                  
                <p className="text-black">Total Profit:{profit} </p>
                <p className="text-black">Profit After Tax: {tax}</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
