import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"

import {ReactComponent as CrwnLogo} from "../../Assets/crown.svg"
import "./Navigation.scss"

export default function Navigation(){
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
          <Link className="nav-link" to="signin">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}