import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"

import {ReactComponent as CrwnLogo} from "../../Assets/crown.svg"
import { UserContext } from "../../Contexts/User"
import { CartContext } from "../../Contexts/Cart"
import { signOutUser } from "../../Utils/Firebase"
import CartIcon from "../../Components/CartIcon/CartIcon"
import CartDropDown from "../../Components/CartDropDown/CartDropDown"

import "./Navigation.scss"

export default function Navigation(){
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  
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
          <CartIcon />
        </div>
        { isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  )
}