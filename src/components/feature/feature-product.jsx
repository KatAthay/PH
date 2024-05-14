import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import shopTitle from '../../utils/shopTitle.utils'

// import { FaArrowRight } from 'react-icons/fa6'
import { BsArrowRight } from 'react-icons/bs'

import './feature-product.styles.scss'

const FeatureProduct = ({ product }) => {
  const {
    name,
    price,
    imageUrl,
    thumbnailUrl,
    description,
    size_description,
    latin_binomial,
  } = product
  const plantName = name.toLowerCase().split(' ').join('-')
  const nameMatch = name
  const img1 = imageUrl.img1
  const priceLarge = price.large
  const priceMedium = price.medium

  const [selectedImage, setSelectedImage] = useState(img1)

  //Thumbnail Image handling
  const handleThumbnailClick = (clickedThumbnail) => {
    const thumbnailKey = Object.keys(thumbnailUrl).find(
      (key) => thumbnailUrl[key] === clickedThumbnail
    )

    console.log('Clicked Thumbnail Key:', thumbnailKey)
    const imgMatch = thumbnailKey.match(/(\d+)(?=(?:-thumb)?\.[^.]*$|$)/)

    if (thumbnailKey === undefined) {
      console.error('thumbnail key not found:', clickedThumbnail)
    }

    const lastNumber = imgMatch[1]

    console.log('Last Number:', lastNumber)
    const fullSizeImageKey = Object.keys(imageUrl).find((key) =>
      key.includes(lastNumber)
    )

    console.log('Full Size Image Key:', fullSizeImageKey)

    const fullSizeImage = imageUrl[fullSizeImageKey]

    console.log('Full Size Image:', fullSizeImage)

    setSelectedImage(fullSizeImage)
  }
  useEffect(() => {}, [selectedImage])

  return (
    <>
      <div className="feature-container">
        <div className="feature-img-container">
          <div className="feature-thumb-col">
            {thumbnailUrl &&
              Object.entries(thumbnailUrl).map(
                ([thumbnailKey, thumbnail], index) =>
                  (index === 0 || index === 2) && (
                    <div
                      className="feature-thumb-container"
                      key={index}
                      onClick={() => handleThumbnailClick(thumbnail)}
                    >
                      <img src={thumbnail} alt={`${name}`} loading="lazy" />
                    </div>
                  )
              )}
          </div>
          <div className="feature-img-col">
            <img src={selectedImage} alt={`${name}`} />
          </div>
        </div>
        <div className="feature-info-container">
          <div className="feature-plant-header">THIS WEEKS FEATURED PLANT</div>
          <div className="feature-header">
            <span className="feature-name">{name}</span>
            <div className="feature-latin">{latin_binomial}</div>
            <div className="feature-price">{`$${priceMedium} - $${priceLarge}`}</div>
          </div>
          <div className="feature-size-container">
            <div className="feature-size-description">
              {' '}
              {size_description &&
                Object.entries(size_description).map(([size, value]) => (
                  <div className="size-description" key={size}>{`${shopTitle(
                    size
                  )}: ${value}`}</div>
                ))}
            </div>
            <div className="feature-description">{description}</div>

            <div className="styled-line"></div>

            <Link
              to={`/shop/product/${plantName}`}
              state={{ nameMatch }}
              className="go-to-product"
            >
              View Full Details
              <div className="arrow">
                {/* <FaArrowRight /> */}
                <BsArrowRight />
              </div>
            </Link>
            <div className="styled-line"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureProduct
