import { useContext, useState } from "react";
import { PropertyContext } from "./App";
import ImageView from "./ImageView";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Property = ({ onPropertyStatusClick }) => {
  // const[propertys,setPropertys]=useState(propertyData);
  const { propertyData } = useContext(PropertyContext);
  const { setPropertyData } = useContext(PropertyContext);
  const { setDisplayProperties } = useContext(PropertyContext);
  const { displayProperties } = useContext(PropertyContext);
  const [openPopup, setOpenPopup] = useState(true);
  const [viewItems, setViewItems] = useState();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let navigate = useNavigate();
  console.log(propertyData);

  const onImageView = (image) => {
    console.log(image);
    setViewItems(image);
  };

  const filterItem = (categoryValue) => {
    let result = propertyData.filter(
      (property) => property.property_category === categoryValue
    );
    setDisplayProperties(result);
    console.log(categoryValue, ": ", result);
  };

  // const onPropertyStatusClick=(id) => {
  //   console.log(id);
  //  const newPropertyData=[...propertyData];
  //  const index=propertyData.findIndex((property)=>property.id===id)
  //  console.log(`index>>>`,index);
  //  newPropertyData[index].propertySoldStatus=true;
  //  setDisplayProperties(newPropertyData);
  //  setPropertyData(newPropertyData)

  // }

  // const onPropertyStatusCheck = (property) => {
  //   if (property.propertySoldStatus === true) {
  //     alert("Already Sold");
  //     navigate("../Property", { replace: true });
  //   }
  // };

  const NextImage = (id) => {
    let newDisplayProperties = [...displayProperties];
    const index = displayProperties.findIndex((property) => property.id === id);
    let temp = newDisplayProperties[index].imgIndex++;

    let images = newDisplayProperties[index].img;
    console.log("index>>>>", index);
    console.log("Img Index", temp);
    setDisplayProperties(newDisplayProperties);
    if (temp >= images.length - 1) {
      newDisplayProperties[index].imgIndex = 0;
      setDisplayProperties(newDisplayProperties);
    }
  };
  const PrevImage = (id) => {
    let newDisplayProperties = [...displayProperties];
    const index = displayProperties.findIndex((property) => property.id === id);
    let images = newDisplayProperties[index].img;
    let temp = newDisplayProperties[index].imgIndex--;
    console.log("index>>>>", index);
    console.log("Img Index", temp);
    setDisplayProperties(newDisplayProperties);
    if (temp <= 0) {
      newDisplayProperties[index].imgIndex = images.length - 1;
      setDisplayProperties(newDisplayProperties);
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center w-full mb-20">
            <div className="mb-3 ">
              <h1 className="text-center">Property Type</h1>
              <br></br>
              {/* <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normaltext-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
    onClick={(e)=>{
      setCategoryValue(e.target.value)
      filterItem()
      }
    }>
       
        <option value="Land-Property">Land Property</option>
        <option value="Residencial-Property">Residential Property</option>
        <option value="Commercial-Property">Commercial Property</option>
    </select> */}
              <div className="flex justify-center"></div>
              <button
                className="mx-5"
                onClick={() => setDisplayProperties(propertyData)}
              >
                All Property
              </button>
              <button
                className="mx-5"
                onClick={() => filterItem("Land-Property")}
              >
                Land Property
              </button>
              <button
                className="mx-5"
                onClick={() => filterItem("Residencial-Property")}
              >
                Residencial Property
              </button>
              <button
                className="mx-5"
                onClick={() => filterItem("Commercial-Property")}
              >
                Commercial Property
              </button>
              <Link to="/property/add">Add Property</Link>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {displayProperties.map((property) => (
              <div className="xl:w-1/2 md:w-1/2 p-4" key={property.id}>
                <div className="bg-gray-100  rounded-lg">
                  <img
                    className="h-80 rounded w-full object-cover object-center mb-6"
                    src={property.img[property.imgIndex]}
                    alt="content"
                  />
                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        PrevImage(property.id);
                      }}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        NextImage(property.id);
                      }}
                    >
                      Next
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      {property.totalAreaInSquareFt} sqft
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Rs {property.totalPrice}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {property.address}
                    </p>
                    <br></br>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
                        onClick={() => {
                          setOpenPopup(false);
                          onImageView(property.img);
                        }}
                      >
                        View Property
                      </button>
                      <button>
                        {property.propertySoldStatus === true ? (
                          "Sold"
                        ) : (
                          <Link
                            to="/ClientSoldDetails"
                            onClick={() => {
                              // onPropertyStatusCheck(property);
                              onPropertyStatusClick(property.id);
                            }}
                          >
                            {property.propertySoldStatus ? "Sold" : "Unsold"}
                          </Link>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ImageView
          imageItems={viewItems}
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        />
      </section>
    </>
  );
};

export default Property;
