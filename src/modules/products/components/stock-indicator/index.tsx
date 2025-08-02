"use client"

import { useState, useEffect } from "react"
import { clx } from "@medusajs/ui"

type StockLevel = "in_stock" | "low_stock" | "out_of_stock"

type StockIndicatorProps = {
  stockLevel?: StockLevel
  stockCount?: number
  showViewers?: boolean
}

const StockIndicator = ({ 
  stockLevel = "in_stock", 
  stockCount = 15,
  showViewers = true 
}: StockIndicatorProps) => {
  const [viewerCount, setViewerCount] = useState(0)

  // Simulate real-time viewer count
  useEffect(() => {
    const baseCount = Math.floor(Math.random() * 20) + 5
    setViewerCount(baseCount)

    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 3) - 1 // -1, 0, or 1
        const newCount = Math.max(3, Math.min(25, prev + change))
        return newCount
      })
    }, 15000) // Update every 15 seconds

    return () => clearInterval(interval)
  }, [])

  const getStockInfo = () => {
    switch (stockLevel) {
      case "out_of_stock":
        return {
          text: "Out of Stock",
          subtext: "Notify me when available",
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          icon: "❌"
        }
      case "low_stock":
        return {
          text: `Only ${stockCount} left in stock`,
          subtext: "Order soon!",
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200",
          icon: "⚠️"
        }
      default:
        return {
          text: "In Stock",
          subtext: "Ready to ship",
          color: "text-green-600",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          icon: "✅"
        }
    }
  }

  const stockInfo = getStockInfo()

  return (
    <div className="space-y-2">
      {/* Stock Status */}
      <div className={clx(
        "flex items-center justify-between p-2 rounded border",
        stockInfo.bgColor,
        stockInfo.borderColor
      )}>
        <div className="flex items-center space-x-2">
          <span className="text-sm">{stockInfo.icon}</span>
          <div>
            <p className={clx("text-sm font-medium", stockInfo.color)}>
              {stockInfo.text}
            </p>
            <p className="text-xs text-gray-600">
              {stockInfo.subtext}
            </p>
          </div>
        </div>

        {stockLevel === "in_stock" && (
          <div className="text-right">
            <p className="text-xs text-gray-600">Ships within</p>
            <p className="text-sm font-medium text-gray-900">1-2 days</p>
          </div>
        )}
      </div>

      {/* Real-time Activity */}
      {showViewers && stockLevel !== "out_of_stock" && (
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-gray-600">
              <span className="font-medium text-gray-900">{viewerCount}</span> viewing
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600">Live</span>
          </div>
        </div>
      )}

      {/* Recent Activity */}
      {stockLevel !== "out_of_stock" && (
        <div className="bg-gray-50 rounded p-2">
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-orange-500">🔥</span>
            <span className="text-gray-700">
              <span className="font-medium">12 sold</span> in 24h
            </span>
          </div>
        </div>
      )}

      {/* Urgency Indicators */}
      {stockLevel === "low_stock" && (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded p-2">
          <div className="flex items-center space-x-2">
            <span className="text-red-500 text-sm">⏰</span>
            <div>
              <p className="text-xs font-medium text-red-700">
                Limited Stock Alert
              </p>
              <p className="text-xs text-red-600">
                Selling fast!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StockIndicator
