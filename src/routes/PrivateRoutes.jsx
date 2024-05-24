/* eslint-disable no-unused-vars */
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
export default function PrivateRoutes({children}){
    const [user, loading, error] = useAuthState(auth);
    if(!user){
        return <Navigate to='/login'/>
    }
    if (error) {
      return  console.log(error)
    }
    return children;
}