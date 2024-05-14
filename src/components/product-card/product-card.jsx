import { Link } from 'react-router-dom'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const plantName = name.toLowerCase().split(' ').join('-')
  const nameMatch = name
  const mainImg = imageUrl.img1

  const prices = Object.values(price)
  const price1 = Math.min(...prices)
  const price2 = Math.max(...prices)

  return (
    <>
      <Link to={`/shop/product/${plantName}`} state={{ nameMatch }}>
        <div className="product-card-container">
          <div className="product-card">
            <div className="product-card-img">
              {mainImg && <img src={mainImg} alt={`${name}`} />}
            </div>
            <div className="footer">
              <span className="name">{name}</span>
              <span className="price">{`$${price1} - $${price2}`}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductCard
