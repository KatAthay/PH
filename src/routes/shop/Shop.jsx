import { Routes, Route, Link, useLocation } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview'
import CategoryPage from '../category-page/category-page'
import ProductPage from '../product-page/product-page'

import './shop.styles.scss'

const Shop = () => {
  const location = useLocation()

  const isShopPage =
    location.pathname.startsWith('/shop') || location.pathname === '/shop/'

  return (
    <div className="shop-container">
      {isShopPage && (
        <div className="mobile-buttons">
          {/* <Link to="/shop/best-sellers" className="mobile-button">
            Best Sellers
          </Link>
          <Link to="/shop/pet-friendly" className="mobile-button">
            Pet Friendly
          </Link>
          <Link to="/shop/new-plant-parent" className="mobile-button">
            New Plant Parent
          </Link>
          <Link to="/shop/all-products" className="mobile-button">
            All Products
          </Link> */}
        </div>
      )}

      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category/" element={<CategoryPage />} />
        <Route path="product/:productName" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default Shop
