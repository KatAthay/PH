import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card'
import shopTitle from '../../utils/shopTitle.utils'
import './directory-preview.styles.scss'

const DirectoryPreview = ({ title, products }) => {
  return (
    <div className="directory-preview-container">
      <h2 className="directory-title">
        <Link to={`/shop/${title}`}>{shopTitle(title)}</Link>
      </h2>
      <div className="directory-preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <div className="product-wrapper" key={product.id}>
              <ProductCard product={product} />
              <div className="category-overlay">
                <h3>{shopTitle(title)}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default DirectoryPreview
