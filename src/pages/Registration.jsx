/* eslint-disable no-unused-vars */
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import GoogleLogin from "../components/GoogleLogin";
import auth from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Registration() {
  const Navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [user1] = useAuthState(auth);


  useEffect(()=>{
    if(user1){
      Navigate('/');
    }
  },[user1,Navigate])

  const handleSignUp=(e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    createUserWithEmailAndPassword(email,pass)
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="pass"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
            {
              error&&<p className="text-red">{error.message}</p>
            }
          </form>
          <GoogleLogin/>
        </div>
      </div>
    </div>
  );
}

export default Registration;
