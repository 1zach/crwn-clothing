import "./ProductCard.scss"
import Button from "../Button/Button"

export default function ProductCard({product}) {
  const {name, price, imageUrl} = product
  return(
  <div className="product-card-container">
    <img alt={`${name}`} src={imageUrl}/>
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      </div>
    <Button buttonType="inverted">Add to Cart</Button>



  </div>
  )
}