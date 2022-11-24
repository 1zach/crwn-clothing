import { useState, useContext } from "react"
import FormInput from "../FormInput/FormInput"
import Button from "../Button/Button"
//import { UserContext } from "../../Contexts/User"
import { authSignInWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../Utils/Firebase"
import './SignInForm.scss'

const defaultFormFields = {
  
  email:'',
  password:'',
 
}
export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {email, password} = formFields
 // const {setCurrentUser} = useContext(UserContext)

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
   // setCurrentUser(user)
    //await createUserDocumentFromAuth(user)
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(event)
    try {
      const {user} = await authSignInWithEmailAndPassword(email, password);
      console.log(user);
      //setCurrentUser(user)
      setFormFields(defaultFormFields)
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert("Wrong email or password")
          break;
        case 'auth/user-not-found':
          alert("User not found")
          break;
        default: console.log(error)
      }
    }
  }
  console.log(formFields)
  return(
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <span>Sign in With Email and Password</span>
      <form>
        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
      <div className="buttons-container">
        <Button type="submit" onClick={handleSubmit}>Sign In</Button>
        <Button type="button" onClick={signInWithGoogle} buttonType="google">Google Sign In</Button>
      </div>
      </form>
    </div>


  )
}