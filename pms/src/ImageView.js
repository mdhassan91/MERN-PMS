import View from "./View";

const ImageView = ({imageItems,setOpenPopup,openPopup}) => {
    

    return ( <>
    {openPopup? "": <View  imageItems={imageItems} setOpenPopup={setOpenPopup}  />}
 
    </> );
}
 
export default ImageView;