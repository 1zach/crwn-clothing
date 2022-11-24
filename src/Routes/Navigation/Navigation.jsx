import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"

import {ReactComponent as CrwnLogo} from "../../Assets/crown.svg"
import { UserContext } from "../../Contexts/User"
import { signOutUser } from "../../Utils/Firebase"

import "./Navigation.scss"

export default function Navigation(){
  const {currentUser} = useContext(UserContext)
  // const signOutHandler = async () => {
  //   await signOutUser();
    
   
  // }
  //console.log(currentUser)
  return(
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
        <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          { currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) :
            (<Link className="nav-link" to="authentication">
            SIGN IN
          </Link>
          )}
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}