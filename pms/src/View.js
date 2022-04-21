
import { IoClose } from "react-icons/io5";
import {useState,} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const View = ({imageItems,setOpenPopup}) => {
    const [images,setImages]=useState(imageItems)
    const [currentImageIndex,setCurrentImageIndex]=useState(0)

console.log(imageItems);

const NextImage=(forwards=true)=>{
    if(forwards){
        setCurrentImageIndex(()=>{
            let temp=currentImageIndex;
            temp++;
            if (temp>images.length-1){
temp=0
            }

            return temp;
        })
    }
    else{
        setCurrentImageIndex(()=>{
            let temp=currentImageIndex;
            temp--;
            if (temp<0){
temp=images.length-1;
            }
            return temp;
        }) 
    }
}









    return (
      <>
     <div className="modal-background   bg-black bg-opacity-50 absolute inset-0     ">
       <div className="flex justify-center items-center ">
     <div className="modal-cointainer bg-white relative  rounded-lg px-4 w-full max-w-2xl h-full md:h-auto">


<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                  Image View
                </h3>
                <button 
                onClick={()=>setOpenPopup(true)}
                type="button" className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                   <IoClose/>
                </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="   ">
            <div className="carousel-inner relative w-full overflow-hidden">
   
  
   <div className="carousel-item relative float-left w-full">
   
       {/* {images.map((img)=>{
        
         <img
         src={`${img}`}
         className="block w-full"
         alt="..."
       />
      console.log(`${img}`);
         
       })} */}
       {/* {images.map((img,index)=>(
         <Carousel>

        
         <div key={index}>

       
          <img
          src={`${img}`}
          className="block w-full"
          alt="..."
        />
          </div>
          </Carousel>
       ))} */}
      <div>
       <img
       src={images[currentImageIndex]}
       className="h-80 rounded w-full object-cover object-center mb-6"
       alt="..."
     />
       </div> 
   
  
     <div className="carousel-caption hidden md:block absolute text-center">
       <h5 className="text-xl">Third slide label</h5>
       <p>Some representative placeholder content for the third slide.</p>
     </div>
   </div>
 </div>
 <div className="flex justify-between">
     
     <button onClick={() =>{NextImage(false)}}>Previous</button>
     <button onClick={() =>{NextImage(true)}}>Next</button>
     
     
     </div> 

                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                 .
                </p>
            </div>
            </div>





    </div>  
</div>
</div>
      </>
      );
}
 
export default View;