import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"

import {ReactComponent as CrwnLogo} from "../../Assets/crown.svg"
import { UserContext } from "../../Contexts/User"
import { CartContext } from "../../Contexts/Cart"
import { signOutUser } from "../../Utils/Firebase"
import CartIcon from "../../Components/CartIcon/CartIcon"
import CartDropDown from "../../Components/CartDropDown/CartDropDown"

//import "./Navigation.scss"
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink  } from "./Navigationstyle"

export default function Navigation(){
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)
  
  return(
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
        <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="shop">
            SHOP
          </NavLink>
          { currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutUser}>SIGN OUT</NavLink>) :
            (<NavLink to="authentication">
            SIGN IN
          </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        { isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}