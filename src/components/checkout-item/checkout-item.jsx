import './checkout-item.styles.scss'
import shopTitle from '../../utils/shopTitle.utils'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ cartItem }) => {
  const { name, thumbnailUrl, price, quantity, size } = cartItem
  const { setIsCartOpen } = useContext(CartContext)
  useEffect(() => {
    setIsCartOpen(false)
  }, [])
  return (
    <>
      <div className="checkout-item-line-container">
        <div className="checkout-item-container">
          <div className="checkout-item-image">
            <img src={thumbnailUrl} alt={`${name}`} />
          </div>
          <div className="checkout-item-details-container">
            <div className="checkout-item-details-row">
              <div className="checkout-item-details">
                <div className="checkout-item-name">{name}, </div>

                <div className="checkout-item-size">{shopTitle(size)}</div>
              </div>
              <div className="checkout-item-price">${price}</div>
            </div>
            <div className="counter-price-container">
              <div className="quantity-container">Quantity: {quantity}</div>
            </div>
          </div>
        </div>
        <div className="styled-line-thin"></div>
      </div>
    </>
  )
}

export default CheckoutItem
