import "./ProductCard.scss"
import Button from "../Button/Button"
import { CartContext } from "../../Contexts/Cart"
import { useContext } from "react"

export default function ProductCard({product}) {
  const {name, price, imageUrl} = product
  const {addItemToCart} = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)
  
  return(
  <div className="product-card-container">
    <img alt={`${name}`} src={imageUrl}/>
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      </div>
    <Button buttonType="inverted" onClick={addProductToCart}>Add to Cart</Button>



  </div>
  )
}