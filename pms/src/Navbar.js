import { MdOutlineHomeWork } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = ({LogOut}) => {
    return ( <>
    
   <div className="  relative min-h-screen flex">

  
{/* Side Bar */}
<div className="bg-gray-900 text-blue-100 w-44 ">
  <div className="fixed">
{/* Logo */}
<div className="mt-5  flex justify-center ">
    <span className="text-4xl text-red-500 "><MdOutlineHomeWork/></span>
    <span className="font-bold text-2xl ">PMS </span>
  </div>


{/* Navbar */}
<nav>
<div className="flex   justify-center fixed">
<ul className="mt-5 py-2 px-2 ">


  <Link to=""  ><li  className="py-2 px-4  text-xl  rounded hover:bg-gray-500">
  Dashboard </li> </Link> 
  <Link to="Property"  ><li  className="py-2 px-4  text-xl  rounded hover:bg-gray-500">
  Property</li> </Link> 
  <Link to="AboutUs"  ><li  className="py-2 px-4  text-xl  rounded hover:bg-gray-500">
  About Us </li> </Link> 
  <Link to="ClientDetails"  ><li  className="py-2 px-4  text-xl  rounded hover:bg-gray-500">
  Client Details</li> </Link> 
  <Link to="Sale"  ><li  className="py-2 px-4  text-xl  rounded hover:bg-gray-500">
  Sale </li> </Link> 
  <button onClick={LogOut} ><li  className="py-2 px-4  text-xl  rounded hover:bg-gray-500">
  Log Out </li> </button>

</ul>
</div>







</nav>
</div>
</div>

</div>






    </> );
}
 
export default Navbar;