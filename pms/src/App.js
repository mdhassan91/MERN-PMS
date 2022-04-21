import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Property from "./Property";
import AboutUs from "./AboutUs";
import ClientDetails from "./ClientDetails";
import ClientSoldDetail from "./ClientSoldDetail";
import Sale from "./Sale";
import AddProperty from "./AddProperty";
import LoginForm from "./LoginComponent/LoginForm";
import "./App.css";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

export const PropertyContext = createContext();

function App() {
  const [propertyData, setPropertyData] = useState([]);
  const [displayProperties, setDisplayProperties] = useState([]);
  const [loginuser, setLoginUser] = useState({ name: "", email: "" });
  const [propertyId, setPropertyId] = useState();
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    loadPropertys();
  }, []);

  const loadPropertys = async () => {
    const response = await axios.get(`http://localhost:5000/property`);
    setPropertyData(response.data);
    setDisplayProperties(response.data);
  };

  const LogOut = () => {
    console.log("Log-Out");
    setLoginUser({ name: "", email: "" });
  };
  const onPropertyStatusClick = (id) => {
    console.log(id);
    setPropertyId(id);
  };

  // const onClickUpdatedClientData = (clientInfo) => {
  //   console.log(clientInfo);
  //   setClientData([...clientData, clientInfo]);
  // };

  return (
    <div className="App">
      <PropertyContext.Provider
        value={{
          propertyData,
          setPropertyData,
          setDisplayProperties,
          displayProperties,
        }}
      >
        <BrowserRouter>
          {loginuser.email === "" ? (
            <div className="Welcome">
              <div className=" flex ">
                <Navbar LogOut={LogOut} />
                <div className="container">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route
                      path="/Property"
                      element={
                        <Property
                          onPropertyStatusClick={onPropertyStatusClick}
                        />
                      }
                    />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route
                      path="/ClientDetails"
                      element={
                        <ClientDetails
                          clientData={clientData}
                          setClientData={setClientData}
                        />
                      }
                    />
                    <Route
                      path="/Sale"
                      element={
                        <Sale
                          clientData={clientData}
                          setClientData={setClientData}
                        />
                      }
                    />
                    <Route path="/property/add" element={<AddProperty />} />
                    <Route
                      path="/ClientSoldDetails"
                      element={
                        <ClientSoldDetail
                          propertyId={propertyId}
                          // onClickUpdatedClientData={onClickUpdatedClientData}
                        />
                      }
                    />
                  </Routes>
                </div>
              </div>
            </div>
          ) : (
            <LoginForm loginuser={loginuser} setLoginUser={setLoginUser} />
          )}
        </BrowserRouter>
      </PropertyContext.Provider>
    </div>
  );
}

export default App;
