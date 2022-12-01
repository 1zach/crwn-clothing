import { useContext} from "react"
import { CategoriesContext } from "../../Contexts/Categories"
import CategoryPreview from "../../Components/CategoryPreview/CategoryPreview"

export default function CategoriesPreview() {
  const {categoriesMap} = useContext(CategoriesContext)
  

  return(
    <div className="category-preview-container">
      {
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products} />
        })
      }
    </div>
    
  )
}