import { useContext } from 'react'

import { CategoriesContext } from '../../contexts/categories.context'

import FeatureProduct from '../../components/feature/feature-product'

const FeaturePreview = ({ category }) => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {Object.keys(categoriesMap)
        .filter((title) => title === category)
        .map((title) => {
          const products = categoriesMap[title]
          const product = products[9]
          console.log('product in feature preview', product)
          return <FeatureProduct key={title} title={title} product={product} />
        })}
    </>
  )
}

export default FeaturePreview
