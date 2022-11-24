import { useContext } from "react"
import { ProductContext } from "../../Contexts/Products"
import ProductCard from "../../Components/ProductCard/ProductCard"
import './Shop.scss'
export default function Shop() {
  const {products} = useContext(ProductContext)
  console.log(products)

  return(
    <div >
      {products.map(({title, items}) => {
        console.log(title)
      if (title === "Hats") {
      return( 
        <div>
          <h1>{title}</h1>
        <div className="product-cards-container">
        {items.map((item) => {
          return <ProductCard key={item.id} product={item}/>
      })}
      </div>
      </div>)}}) 
      }
    </div>
    
  )
}