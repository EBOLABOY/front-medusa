"use client"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square w-full bg-casetify-neutral-100 rounded-2xl flex items-center justify-center">
        <span className="text-casetify-neutral-400">No image available</span>
      </div>
    )
  }

  const selectedImage = images[selectedImageIndex]

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative group">
        <Container
          className="relative aspect-square w-full overflow-hidden bg-white cursor-zoom-in"
          onClick={() => setIsZoomed(!isZoomed)}
        >
          {selectedImage?.url && (
            <Image
              src={selectedImage.url}
              priority={true}
              className={`absolute inset-0 transition-transform duration-300 ${
                isZoomed ? 'scale-150' : 'scale-100 group-hover:scale-105'
              }`}
              alt={`Product image ${selectedImageIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              style={{
                objectFit: "cover",
              }}
            />
          )}

          {/* Simple Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </Container>
      </div>

      {/* Simple Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative flex-shrink-0 w-16 h-16 overflow-hidden transition-opacity duration-200 ${
                index === selectedImageIndex
                  ? 'opacity-100'
                  : 'opacity-60 hover:opacity-80'
              }`}
            >
              {image.url && (
                <Image
                  src={image.url}
                  alt={`Product thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGallery
