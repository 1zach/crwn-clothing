import "./CartIcon.scss"
import { useContext } from "react"
import { CartContext } from "../../Contexts/Cart"
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg'
 


export default function CartIcon() {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

  const toggleCart = () => setIsCartOpen(!isCartOpen)

  
  return(
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{cartCount}</span>
    </div>
  )
}