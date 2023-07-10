import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { verifyAuthorization } from "../../Services/apiServices";
const Authorize = () => {
    const {id,token} = useParams();
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const verifyUser = async(id,token) => {
      //  console.log(id,token);
        try{
         const response = await verifyAuthorization(id,token)
         if(response.status === 200){
           // console.log(response, response.data.decode.id);
            let resetID = response.data.decode.id;
            navigate(`/reset/${resetID}`);
         }
        }
        catch(err){
            console.log("error authorizing", err);
           // console.log(err.response.data) 
            let errmsg = err.response.data.message+": "+ err.response.data.error.name;
            setMsg(errmsg)
            window.alert("Password Reset link expired")
        }
        
    }   
    useEffect(()=> {
       verifyUser(id,token);
    },[id,token])
    return(
        <div className="text-white mx-auto my-5">
        <h6>Verifying user authorization. Please wait .. </h6> 
        {msg && <h6 className="text-danger">{msg}</h6>}
        </div>
    )
}
export default Authorize;