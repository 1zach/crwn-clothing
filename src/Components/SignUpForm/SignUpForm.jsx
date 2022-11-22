import { useState, useContext } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup} from "../../Utils/Firebase"
import FormInput from "../FormInput/FormInput"
import Button from "../Button/Button"
import { UserContext } from "../../Contexts/User"
import './SignUpForm.scss'
const defaultFormFields = {
  displayName:'',
  email:'',
  password:'',
  confirmpwd:'',
}


//password match
//authenticated user with email apssword
//create user document



export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmpwd} = formFields

  const {setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmpwd) {
      alert("Passwords don't match")
      return
    }
  
      try {
        const {user} = await createAuthUserWithEmailAndPassword(email, password);
        console.log(user);

        setCurrentUser(user)

        await createUserDocumentFromAuth(user, {displayName})
        resetFormFields()
  
      } catch(error) {
        
        if (error.code === 'auth/email-already-in-use') {
          alert("Email Already in Use")
        }
        else {
          console.log("error")
        }
      }
    }

    const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user)
    }
  console.log(formFields)
  return(
    <div className="sign-up-container">
      <h2>Don't Have an Account?</h2>
      <span>Sign Up with Email and Password</span>
      <form onSubmit={() =>{}}>
        
        <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
        <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmpwd" value={confirmpwd} />
        <div className="buttons-container">
        <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
        <Button type="button" buttonType="google" onClick={logGoogleUser}>Google Sign Up</Button>
        </div>

      </form>
    </div>
  )
}