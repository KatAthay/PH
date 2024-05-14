
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import Product from '../../components/product/product'

import { CategoriesContext } from '../../contexts/categories.context'

import './product-page.styles.scss'

const ProductPage = () => {

  const { categoriesMap } = useContext(CategoriesContext)
  const products = Object.values(categoriesMap).flatMap(
    (productArray) => productArray
  )

  const location = useLocation()
  const { state } = location

  if (!state || !state.nameMatch) {
    return <div>Error: Product information not found.</div>
  }

  const { nameMatch } = state

  const uniqueProductNames = new Set()

  return (
    <>
      <div className="product-container">
        {products.map((product) => {
          if (
            product.name === nameMatch &&
            !uniqueProductNames.has(product.name)
          ) {
            uniqueProductNames.add(product.name)
            return <Product key={product.id} product={product} />
          }
          return null
        })}
      </div>
    </>

  )
}
export default ProductPage
