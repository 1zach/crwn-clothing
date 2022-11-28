import "./CheckoutItem.scss"
import { useContext } from "react"
import { CartContext } from "../../Contexts/Cart"

export default function CheckOutItem(checkoutItem) {
  const {name, quantity, price, imageUrl } = checkoutItem.checkoutItem
  const {cartItems, addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext)

  const clearItemHandler = () => {
    clearItemFromCart(checkoutItem.checkoutItem)
  }
  console.log(useContext(CartContext))
  return(
    <div className="checkout-item-container">
      <img src={imageUrl} alt={`${name}`} className="image-container"/>
      <div className="name">{name}</div>
      <div className="quantity"><span className="arrow" onClick={()=>removeItemFromCart(checkoutItem.checkoutItem)}> - </span>{quantity}<span className="arrow" onClick={()=> addItemToCart(checkoutItem.checkoutItem)}> + </span></div>
      <div className="price">{(price) * (quantity)}</div>
      <div className="remove-button" onClick={clearItemHandler}>&#935;</div>
    </div>
  )
}