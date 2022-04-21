import { useState, useEffect } from "react";
import axios from "axios";

const RenderSalesDetails = ({ clientData, setClientData, sold }) => {
  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const response = await axios.get(`http://localhost:5000/clientData`);
    setClientData(response.data);
  };

  console.log(clientData);

  let totalPropertySale = clientData.length;
  let revenue = clientData.reduce((revenue, client) => {
    let totalRevenue = parseInt(client.closedPrice);
    return revenue + totalRevenue;
  }, 0);

  let profit = revenue * (30 / 100);
  let tax = profit - profit * (12 / 100);

  return (
    <>
      <div>
        <div className="flex flex-col">
          <table>
            <thead>
              <tr className="bg-gray-200">
                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Sr
                </th>
                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Original Property Price
                </th>
                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Ask Price
                </th>
                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Closed Price
                </th>
                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Profit
                </th>
                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Profit After tax
                </th>
                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Tax %
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
              {clientData.map((client, index) => {
                return (
                  <tr className="whitespace-nowrap" key={index}>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        {client.originalPrice}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        {client.askPrice}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {client.closedPrice}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">
                      {parseInt(client.closedPrice * (30 / 100))}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">
                      {parseInt(
                        client.closedPrice * (30 / 100) -
                          client.closedPrice * (30 / 100) * (12 / 100)
                      )}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">12%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="border-t ">
          <div className="flex justify-start ml-2">
            <div className=" font-semibold  py-6 text-sm uppercase">
              <h1>Total Sales</h1>
              <h1>Total Property Sales :{totalPropertySale}</h1>
              <h1>Total Revenue: {revenue}</h1>
              <h1>Total Profit: {profit} </h1>
              <h1>Profit After Tax: {tax}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenderSalesDetails;
