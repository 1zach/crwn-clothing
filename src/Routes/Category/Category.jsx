import { CategoryContainer, CategoryTitle } from './Categorystyle';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../Contexts/Categories';

export default function Category() {
  const {category} = useParams();
  const {categoriesMap} = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])


  useEffect(() => {
    setProducts(categoriesMap[category]);
  },
    [category, categoriesMap])

    return(
      <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)
          }
      </CategoryContainer>
      </>
    )
    
}