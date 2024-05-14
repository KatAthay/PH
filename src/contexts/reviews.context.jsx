import { createContext, useState, useEffect } from 'react'
import { getReviewsAndDocuments } from '../utils/firebase/firebase.utils.jsx'

export const ReviewsContext = createContext({
  reviewsMap: {},
})

export const ReviewsProvider = ({ children }) => {
  const [reviewsMap, setReviewsMap] = useState({})

  useEffect(() => {
    const getReviewsMap = async () => {
      const reviewsMap = await getReviewsAndDocuments()
      // console.log('reviews Map', reviewsMap)
      //this is where we are affecting state change.
      setReviewsMap(reviewsMap)
    }
    getReviewsMap()
  }, [])

  const value = { reviewsMap }

  return (
    <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
  )
}
