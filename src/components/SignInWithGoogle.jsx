import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../firebase/config";

export const SignInWithGoogle=()=>{

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignUp = ()=>{
        signInWithPopup(auth, googleProvider)
    }
    return(
        <>
        <button onClick={handleGoogleSignUp} >Sign In With Google</button>
        </>
    )
}