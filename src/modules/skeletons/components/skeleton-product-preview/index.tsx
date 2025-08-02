const SkeletonProductPreview = () => {
  return (
    <div className="animate-pulse space-y-3">
      {/* Image skeleton */}
      <div className="aspect-square w-full bg-gray-200 rounded-lg"></div>

      {/* Content skeleton */}
      <div className="space-y-2">
        {/* Title */}
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Price and rating */}
        <div className="flex items-center justify-between pt-1">
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonProductPreview
