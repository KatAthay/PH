import React from 'react'
import { Link } from 'react-router-dom'
import shopTitle from '../../utils/shopTitle.utils'
import ProductCard from '../product-card/product-card'
import { BsArrowRight } from 'react-icons/bs'

import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  return (
    <>
      <div className="category-preview-container">
        <div className="preview-header">
          <h2>
            <Link className="title" to={`/shop/${title}`}>
              {shopTitle(title)}
            </Link>
          </h2>
          <Link to={`/shop/${title}`}>
            <div className="view-more-text">
              View More
              <div className="arrow">
                <BsArrowRight />
              </div>
            </div>
            <div className="styled-line-under"></div>
          </Link>
        </div>

        <div className="preview">
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <div className="product-wrapper" key={product.id}>
                <ProductCard product={product} />
                <div className="category-overlay">
                  <Link className="title" to={`/shop/${title}`}>
                    <h3>{shopTitle(title)}</h3>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default CategoryPreview
