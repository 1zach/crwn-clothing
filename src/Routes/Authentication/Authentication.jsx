

import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import SignInForm from "../../Components/SignInForm/SignInForm";

import './Authentication.scss'

export default function Authentication() {
  
  return(
    <div className="authentication-container">
    <SignInForm />
    <SignUpForm />
    </div>
  )
}