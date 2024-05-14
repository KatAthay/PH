import ReviewCard from '../review-card/review-card'
import './reviews.styles.scss'

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews-preview-container">
      <h2 className="reviews-header">Reviews</h2>
      <div className="reviews-preview">
        {reviews &&
          reviews
            .filter((_, idx) => idx < 4)
            .map((review) => (
              <div key={review.id}>{<ReviewCard reviews={review} />}</div>
            ))}
      </div>
    </div>
  )
}

export default Reviews
