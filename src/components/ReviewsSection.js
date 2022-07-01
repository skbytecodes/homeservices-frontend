import React from 'react'
import Feedback from "./Feedback"
import "../styles/ReviewSection.css"

function ReviewsSection() {
  return (
    <div className="reviews-section">
        <p id="feedbacks-heading">Customer Feedbacks</p>
        <div className="feedbacks">
            <div className='first-feedback'>
                <Feedback />
                <Feedback />
            </div>
            <div className='second-feedback'>
                <Feedback />
                <Feedback />
            </div>
        </div>
    </div>
  )
}

export default ReviewsSection