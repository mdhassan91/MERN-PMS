const RenderClientData = ({ clientData, setClientData }) => {
  return (
    <>
      {clientData.map((client, index) => {
        return (
          <tr className="whitespace-nowrap" key={index}>
            <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-500">{client.clientName}</div>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-500">
                {client.clientContact}
              </div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500">
              {client.property_category}
            </td>

            <td className="px-6 py-4 text-sm text-gray-500">
              {client.address}
            </td>

            <td className="px-6 py-4 text-sm text-gray-500">
              {client.originalPrice}
            </td>

            <td className="px-6 py-4 text-sm text-gray-500">
              {client.closedPrice}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default RenderClientData;
