import "./CartDropDown.scss"
import { useContext } from "react"
import { CartContext } from "../../Contexts/Cart"
import Button from "../Button/Button"
import CartItem from "../CartItems/CartItem"
import { Link } from "react-router-dom"


export default function CardDropDown() {
  const cartItems = (useContext(CartContext)).cartItems  
  return(
    <div className='cart-dropdown-container'>
      <div className="cart-items">
        {cartItems.length ? (
        cartItems.map(item => <CartItem cartItem={item}/>
        ))
        :
        <span className="empty-message">Your cart is Empty</span>
        }
      </div>
      <Link to="checkout"><Button>Go To Checkout</Button></Link>
    </div>
  )
}