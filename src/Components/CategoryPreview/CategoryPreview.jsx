import { Link } from 'react-router-dom'

import './CategoryPreviews.scss'
import ProductCard from '../ProductCard/ProductCard'


export default function CategoryPreview({title, products}) {
  return(
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {
          products.filter((_, i) => i < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product}/>
          })
        }
      </div>
    </div>
  )
}