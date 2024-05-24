import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const Navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(()=>{
    if(!user){
      Navigate('login')
    }
  })
  return (
    <div>
      This is Dashboard
    </div>
  )
}

export default Dashboard
