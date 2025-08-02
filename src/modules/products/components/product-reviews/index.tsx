"use client"

import { useState } from "react"
import { Star } from "@medusajs/icons"
import { clx } from "@medusajs/ui"

type Review = {
  id: string
  author: string
  rating: number
  title: string
  content: string
  date: string
  verified: boolean
  helpful: number
}

type ProductReviewsProps = {
  productId: string
  averageRating?: number
  totalReviews?: number
}

// Mock data - in real implementation, this would come from an API
const mockReviews: Review[] = [
  {
    id: "1",
    author: "Sarah M.",
    rating: 5,
    title: "Perfect fit and great quality!",
    content: "This case fits my phone perfectly and the quality is amazing. The material feels premium and it's been protecting my phone well.",
    date: "2024-01-15",
    verified: true,
    helpful: 12
  },
  {
    id: "2", 
    author: "Mike R.",
    rating: 4,
    title: "Good protection, stylish design",
    content: "Really happy with this purchase. The design looks great and it provides good protection. Only minor issue is it can be a bit slippery.",
    date: "2024-01-10",
    verified: true,
    helpful: 8
  },
  {
    id: "3",
    author: "Emma L.",
    rating: 5,
    title: "Exceeded expectations",
    content: "The quality is even better than I expected. Love the feel and the way it looks. Definitely recommend!",
    date: "2024-01-08",
    verified: false,
    helpful: 5
  }
]

const StarRating = ({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) => {
  const starSize = size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "w-6 h-6"
  
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={clx(starSize, {
            "text-yellow-400 fill-current": star <= rating,
            "text-gray-300": star > rating,
          })}
        />
      ))}
    </div>
  )
}

const ProductReviews = ({ 
  productId, 
  averageRating = 4.3, 
  totalReviews = 127 
}: ProductReviewsProps) => {
  const [showAllReviews, setShowAllReviews] = useState(false)
  const displayedReviews = showAllReviews ? mockReviews : mockReviews.slice(0, 2)

  return (
    <div className="space-y-6">
      {/* Reviews Summary */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <StarRating rating={Math.floor(averageRating)} size="md" />
            <span className="text-lg font-semibold text-gray-900">
              {averageRating}
            </span>
          </div>
          <span className="text-gray-600">
            ({totalReviews} reviews)
          </span>
        </div>
        
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          Write a review
        </button>
      </div>

      {/* Rating Distribution */}
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((stars) => {
          const percentage = stars === 5 ? 65 : stars === 4 ? 25 : stars === 3 ? 8 : 2
          return (
            <div key={stars} className="flex items-center space-x-3 text-sm">
              <span className="w-8 text-gray-600">{stars}★</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="w-10 text-gray-600 text-right">{percentage}%</span>
            </div>
          )
        })}
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <StarRating rating={review.rating} />
                  <span className="font-medium text-gray-900">{review.title}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>{review.author}</span>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      Verified Purchase
                    </span>
                  )}
                  <span>•</span>
                  <span>{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-3 leading-relaxed">
              {review.content}
            </p>
            
            <div className="flex items-center space-x-4 text-sm">
              <button className="text-gray-600 hover:text-gray-800 flex items-center space-x-1">
                <span>👍</span>
                <span>Helpful ({review.helpful})</span>
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                Report
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {mockReviews.length > 2 && (
        <button
          onClick={() => setShowAllReviews(!showAllReviews)}
          className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          {showAllReviews ? "Show Less" : `Show All ${totalReviews} Reviews`}
        </button>
      )}
    </div>
  )
}

export default ProductReviews
