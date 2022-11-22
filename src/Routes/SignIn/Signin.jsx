
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/Firebase"
import SignUpForm from "../../Components/SignUpForm/SignUpForm";

export default function Signin() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return(
    <div>
    <button onClick={logGoogleUser}>Sign in With Google</button>
    <SignUpForm />
    </div>
  )
}