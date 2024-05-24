import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';



function GoogleLogin() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleGoogleSignIn =()=>{
        signInWithGoogle()
    }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className='btn mt-3 bg-orange-400 rounded-lg w-full'> Google Sign in</button>
    </div>
  )
}

export default GoogleLogin
