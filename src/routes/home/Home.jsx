import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Commitments from '../../components/commitments/Commitments'
import DirectoriesPreview from '../directories-preview/directories-preview'
import FeaturePreview from '../feature-preview/feature-preview'
import ReviewsPreview from '../reviews/reviews-preview'
import Button from '../../components/button/main-button/Button'
import { scrollToTop } from '../../utils/scrollToTop'
import heroImage from '../../assets/styled-plants-5.png'

import './home.styles.scss'

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const handleCategoryClick = () => {
    navigate(`/shop/`)
  }

  useEffect(() => {
    scrollToTop()
  }, [location])
  return (
    <>
      {/* Hero section */}
      <div className="home-container">
        <div className="hero-container">
          <div className="hero-image-container">
            <img src={heroImage} alt="indoor plants" className="hero-img" />
          </div>
          <div className="hero-text-container">
            <div className="header-text">The Plant Haus</div>
            <div className="header-description">
              Your trusted companion in cultivating a thriving oasis at home.
              With an extensive array of lush botanical wonders, handpicked for
              their beauty and resilience, we empower you to transform any space
              into a verdant sanctuary with ease.
            </div>
            <Button onClick={() => handleCategoryClick('category')}>
              Shop Now
            </Button>
          </div>
        </div>

        {/* Our Commitments Section */}
        <div className="commitments-section">
          <Commitments />
        </div>
        {/* Best Sellers*/}
        <div className="directories-section">
          <DirectoriesPreview category="pet-friendly" />
        </div>
        {/* Feature  */}
        <div className="feature-container">
          <FeaturePreview category="all-products" />
        </div>

        {/* <Reviews /> */}
        <div className="reviews-container">
          <ReviewsPreview />
        </div>
      </div>
    </>
  )
}
export default Home
