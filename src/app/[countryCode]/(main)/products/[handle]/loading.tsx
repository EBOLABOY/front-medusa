export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb skeleton */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
            <span>/</span>
            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            <span>/</span>
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image gallery skeleton */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Product info skeleton */}
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>

            {/* Price */}
            <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-10 bg-gray-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <div className="h-12 bg-gray-200 rounded animate-pulse"></div>

            {/* Features */}
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products skeleton */}
        <div className="mt-16">
          <div className="h-8 bg-gray-200 rounded w-48 mb-8 animate-pulse"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
