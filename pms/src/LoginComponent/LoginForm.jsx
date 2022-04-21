import { useState,useEffect } from "react";
import axios from "axios";

const LoginForm = ({loginuser,setLoginUser}) => {
    const [loginData, setloginData] = useState([]);
  
    const[error,setError]=useState("");
    const [details,setDetails]=useState({email:"",password:"",})
   
    useEffect(() => {
      loadlogins();
    }, []);
  
    const loadlogins = async () => {
      const response = await axios.get(`http://localhost:5000/login`);
      setloginData(response.data);
     
    };
  

const{email,password}=details


const Login = details=>{
  console.log(details);
  loginData.map((loginUser)=>
  {
    

    if(loginUser.email===details.email && loginUser.password===details.password){
      console.log("Log-In");
  setLoginUser({
    name: "Admin",
    email:details.email,
  })
    }
    else{
      console.log("Please Enter Valid Credentials");
      setError("Please Enter Valid Credentials")
    }
  })

}

const LogOut = ()=>{
  console.log("Log-Out");
  setLoginUser({name:"",email:"",})
}




const onSubmit=(e)=>{
    e.preventDefault();
    Login(details)
}




    return ( <>
       <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
    <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
        <form onSubmit={(e)=>onSubmit(e)} className="mt-6">
            <div className="my-5 text-sm">
                <label htmlFor="username" className="block text-black">Email</label>
                <input type="email"
                value={email}
                autoFocus id="username"
                onChange={(e)=>setDetails({...details, email: e.target.value})}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" />
            </div>
            <div className="my-5 text-sm">
                <label htmlFor="password" className="block text-black">Password</label>
                <input type="password" id="password"
                 onChange={(e)=>setDetails({...details, password: e.target.value})}
                 value={password} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                <div className="flex justify-end mt-2 text-xs text-gray-600">
                  <button></button>
                </div>
            </div>

            <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
        </form>

       
      
        <p className="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <button className="text-black font-medium"> Create One </button>  </p> 

    </div>
</div>
 
    </> );
}
 
export default LoginForm;