import { Heading } from "@medusajs/ui"

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large"
  className?: string
}

export const LoadingSpinner = ({ size = "medium", className = "" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8", 
    large: "w-12 h-12"
  }

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]} ${className}`} />
  )
}

interface PageLoadingProps {
  message?: string
}

export const PageLoading = ({ message = "Loading..." }: PageLoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] py-16">
      <LoadingSpinner size="large" className="mb-4" />
      <p className="text-gray-600">{message}</p>
    </div>
  )
}

interface ErrorFallbackProps {
  error?: Error
  reset?: () => void
}

export const ErrorFallback = ({ error, reset }: ErrorFallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] py-16 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">😞</div>
        <Heading level="h2" className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </Heading>
        <p className="text-gray-600 mb-6">
          We're sorry for the inconvenience. Please try refreshing the page or contact our support team.
        </p>
        {reset && (
          <button
            onClick={reset}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Try Again
          </button>
        )}
        {error && process.env.NODE_ENV === 'development' && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm text-gray-500">Error Details (Dev Mode)</summary>
            <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}

export default { LoadingSpinner, PageLoading, ErrorFallback }