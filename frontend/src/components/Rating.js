import React from 'react'

const Rating = (props) => {
  // we get back the props from the Product component
  const { rating, numReviews } = props

  return (
    <div className="rating">
      <span>
        {/* conditional display of the stars using the styles */}
        <i className={rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fa fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span>
        {/* conditional display of the stars using the styles */}
        <i className={rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fa fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span>
        {/* conditional display of the stars using the styles */}
        <i className={rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fa fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span>
        {/* conditional display of the stars using the styles */}
        <i className={rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fa fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span>
        {/* conditional display of the stars using the styles */}
        <i className={rating >= 4 ? 'fas fa-star' : rating >= 4.5 ? 'fa fa-star-half-alt' : 'far fa-star'}></i>
      </span>
      <span> {numReviews} reviews </span>
    </div>
  )
}

export default Rating
