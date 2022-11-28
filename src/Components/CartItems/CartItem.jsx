import './CartItem.scss'

export default function CartItem(cartItem) {
  const {name, quantity, imageUrl, price} = cartItem.cartItem
  console.log(cartItem.cartItem.id)
  return(
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{quantity} x ${price}</span>
      </div>
    </div>
  )
}