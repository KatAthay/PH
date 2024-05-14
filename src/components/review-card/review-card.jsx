import React from 'react'
import './review-card.styles.scss'

const ReviewCard = ({ reviews }) => {
  const { location, review, imageUrl, user } = reviews

  return (
    <div className="review-card-container">
      <div className="review-card">
        <div className="review-card-header">
          <div className="review-profile-picture">
            <img src={imageUrl} alt={`${imageUrl}`} />
          </div>
          <div className="review-user-info">
            <div className="review-user">{user}</div>
            <div className="review-location">{location}</div>
          </div>
        </div>
        <div className="user-review">
          <p>{review}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
