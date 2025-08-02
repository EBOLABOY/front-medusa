import LoadingSpinner from "../loading-spinner"

interface PageLoadingProps {
  message?: string
  fullScreen?: boolean
}

const PageLoading = ({ 
  message = "Loading...", 
  fullScreen = true 
}: PageLoadingProps) => {
  const containerClasses = fullScreen 
    ? "fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center"
    : "flex items-center justify-center py-12"

  return (
    <div className={containerClasses}>
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" className="text-black mx-auto" />
        <p className="text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  )
}

export default PageLoading
