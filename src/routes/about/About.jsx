import React from 'react'
import './about.styles.scss'
import plantBedroom from '../../assets/styled-plants-3.png'

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-img">
          <img src={plantBedroom} alt="about page" />
        </div>
        <div className="about-info">
          <h1>About Us</h1>
          <p>
            Nestled in the heart of Brooklyn, our plant shop stands as a green
            oasis for urban dwellers seeking the perfect touch of nature within
            their homes. Meticulously curated with the finest indoor plants, our
            store is a haven for plant enthusiasts and novices alike. From
            vibrant succulents to elegant ferns, each plant is handpicked to
            bring a breath of fresh air to any living space. Recently, we've
            expanded our reach beyond the bustling streets of Brooklyn, bringing
            our carefully selected collection to plant lovers worldwide through
            our new ecommerce platform. Now, customers can explore and purchase
            their favorite green companions with just a click, ensuring that the
            beauty of our botanical offerings transcends geographical
            boundaries. Embrace the tranquility of nature with our thoughtfully
            curated selection, now available at your fingertips.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
