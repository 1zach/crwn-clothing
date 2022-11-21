
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/Firebase"
 

export default function Signin() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return(
    
    <button onClick={logGoogleUser}>Sign in With Google</button>
  )
}