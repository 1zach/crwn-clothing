import { CartContext } from "../../Contexts/Cart"
import { useContext } from "react"
import CheckOutItem from "../../Components/CheckoutItem/CheckoutItem"
import './Checkout.scss'
export default function Checkout() {

 const {cartItems, cartTotal} = useContext(CartContext)
 console.log(cartItems)
  return(
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
    
      {cartItems.map(item => 
        <CheckOutItem checkoutItem={item} key={item.id}/>
      )}
    
    <span className="total">Total: ${cartTotal}</span>
    </div>
  )
}