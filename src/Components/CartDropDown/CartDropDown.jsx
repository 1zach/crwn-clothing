import "./CartDropDown.scss"
import Button from "../Button/Button"

export default function CardDropDown() {
  return(
    <div className='cart-dropdown-container'>
      <div className="cart-items"></div>
      <Button>Go To Checkout</Button>
    </div>
  )
}