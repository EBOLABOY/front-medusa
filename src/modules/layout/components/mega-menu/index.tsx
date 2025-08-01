"use client"

import { useState, useRef, useEffect } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [focusedItem, setFocusedItem] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!activeMenu) return

      switch (event.key) {
        case 'Escape':
          setActiveMenu(null)
          setFocusedItem(null)
          break
        case 'Tab':
          // Allow natural tab navigation
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [activeMenu])

  // Delayed menu close for better UX
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
      setFocusedItem(null)
    }, 150)
  }

  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveMenu(menuId)
  }

  const menuItems = [
    {
      id: "devices",
      title: "Devices",
      href: "/store?category=devices",
      submenu: {
        featured: [
          { title: "iPhone 16 Pro Max", href: "/store?device=iphone-16-pro-max", badge: "New" },
          { title: "iPhone 16 Pro", href: "/store?device=iphone-16-pro", badge: "New" },
          { title: "Galaxy S25 Ultra", href: "/store?device=galaxy-s25-ultra", badge: "Popular" },
        ],
        categories: [
          {
            title: "iPhone",
            items: [
              { title: "iPhone 16 Series", href: "/store?device=iphone-16" },
              { title: "iPhone 15 Series", href: "/store?device=iphone-15" },
              { title: "iPhone 14 Series", href: "/store?device=iphone-14" },
              { title: "iPhone 13 Series", href: "/store?device=iphone-13" },
            ]
          },
          {
            title: "Samsung",
            items: [
              { title: "Galaxy S25 Series", href: "/store?device=galaxy-s25" },
              { title: "Galaxy S24 Series", href: "/store?device=galaxy-s24" },
              { title: "Galaxy Note Series", href: "/store?device=galaxy-note" },
            ]
          },
          {
            title: "Other Devices",
            items: [
              { title: "Google Pixel", href: "/store?device=pixel" },
              { title: "OnePlus", href: "/store?device=oneplus" },
              { title: "iPad", href: "/store?device=ipad" },
            ]
          }
        ]
      }
    },
    {
      id: "cases",
      title: "Cases",
      href: "/store?category=cases",
      submenu: {
        featured: [
          { title: "Impact Case", href: "/store?type=impact", badge: "Best Seller" },
          { title: "Clear Case", href: "/store?type=clear", badge: "Popular" },
          { title: "Ultra Bounce", href: "/store?type=ultra-bounce", badge: "New" },
        ],
        categories: [
          {
            title: "Protection Level",
            items: [
              { title: "Impact Cases", href: "/store?protection=impact" },
              { title: "Clear Cases", href: "/store?protection=clear" },
              { title: "Slim Cases", href: "/store?protection=slim" },
              { title: "Rugged Cases", href: "/store?protection=rugged" },
            ]
          },
          {
            title: "Features",
            items: [
              { title: "MagSafe Compatible", href: "/store?feature=magsafe" },
              { title: "Wireless Charging", href: "/store?feature=wireless" },
              { title: "Card Holder", href: "/store?feature=wallet" },
            ]
          },
          {
            title: "Collections",
            items: [
              { title: "Limited Edition", href: "/store?collection=limited" },
              { title: "Artist Collaboration", href: "/store?collection=artist" },
              { title: "Seasonal", href: "/store?collection=seasonal" },
            ]
          }
        ]
      }
    },
    {
      id: "accessories",
      title: "Accessories",
      href: "/store?category=accessories",
      submenu: {
        featured: [
          { title: "MagSafe Charger", href: "/store?accessory=magsafe-charger", badge: "Popular" },
          { title: "Phone Stand", href: "/store?accessory=stand", badge: "New" },
          { title: "Screen Protector", href: "/store?accessory=screen", badge: "Essential" },
        ],
        categories: [
          {
            title: "Charging",
            items: [
              { title: "Wireless Chargers", href: "/store?accessory=wireless-charger" },
              { title: "Car Chargers", href: "/store?accessory=car-charger" },
              { title: "Power Banks", href: "/store?accessory=power-bank" },
            ]
          },
          {
            title: "Protection",
            items: [
              { title: "Screen Protectors", href: "/store?accessory=screen-protector" },
              { title: "Camera Lens Protectors", href: "/store?accessory=lens-protector" },
            ]
          },
          {
            title: "Lifestyle",
            items: [
              { title: "Phone Grips", href: "/store?accessory=grip" },
              { title: "Phone Stands", href: "/store?accessory=stand" },
              { title: "Cable Organizers", href: "/store?accessory=organizer" },
            ]
          }
        ]
      }
    },
    {
      id: "custom",
      title: "Customize",
      href: "/store?custom=true",
      submenu: {
        featured: [
          { title: "Photo Upload", href: "/store?custom=photo", badge: "Popular" },
          { title: "Text Design", href: "/store?custom=text", badge: "Easy" },
          { title: "Design Studio", href: "/store?custom=studio", badge: "Pro" },
        ],
        categories: [
          {
            title: "Design Options",
            items: [
              { title: "Upload Your Photo", href: "/store?custom=photo-upload" },
              { title: "Add Text", href: "/store?custom=text-design" },
              { title: "Choose Patterns", href: "/store?custom=patterns" },
              { title: "Color Combinations", href: "/store?custom=colors" },
            ]
          },
          {
            title: "Templates",
            items: [
              { title: "Minimalist", href: "/store?template=minimalist" },
              { title: "Artistic", href: "/store?template=artistic" },
              { title: "Nature", href: "/store?template=nature" },
            ]
          }
        ]
      }
    }
  ]

  return (
    <nav className="relative" ref={menuRef} role="navigation" aria-label="Main navigation">
      <ul className="flex items-center space-x-10">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <LocalizedClientLink
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors flex items-center gap-1 py-2"
              aria-expanded={activeMenu === item.id}
              aria-haspopup="true"
              onFocus={() => setActiveMenu(item.id)}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveMenu(activeMenu === item.id ? null : item.id)
                }
              }}
            >
              {item.title}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </LocalizedClientLink>

            {/* Mega Menu Dropdown */}
            {activeMenu === item.id && (
              <div
                className="absolute top-full left-0 w-screen max-w-4xl bg-white border border-gray-200 shadow-xl rounded-lg mt-4 p-8 z-50"
                style={{ left: '-200px' }}
                role="menu"
                aria-label={`${item.title} submenu`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-4 gap-8">
                  {/* Featured Items */}
                  <div role="group" aria-labelledby={`featured-${item.id}`}>
                    <h3 id={`featured-${item.id}`} className="text-sm font-semibold text-gray-900 mb-4">Featured</h3>
                    <ul className="space-y-3">
                      {item.submenu.featured.map((featured, index) => (
                        <li key={index}>
                          <LocalizedClientLink
                            href={featured.href}
                            className="block group focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
                            role="menuitem"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600 group-hover:text-black group-focus:text-black transition-colors">
                                {featured.title}
                              </span>
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${
                                  featured.badge === 'New'
                                    ? 'bg-green-100 text-green-800'
                                    : featured.badge === 'Popular'
                                      ? 'bg-blue-100 text-blue-800'
                                      : featured.badge === 'Best Seller'
                                        ? 'bg-purple-100 text-purple-800'
                                        : 'bg-gray-100 text-gray-800'
                                }`}
                                aria-label={`${featured.badge} item`}
                              >
                                {featured.badge}
                              </span>
                            </div>
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Categories */}
                  {item.submenu.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} role="group" aria-labelledby={`category-${item.id}-${categoryIndex}`}>
                      <h3 id={`category-${item.id}-${categoryIndex}`} className="text-sm font-semibold text-gray-900 mb-4">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <LocalizedClientLink
                              href={subItem.href}
                              className="block text-sm text-gray-600 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded transition-colors py-1"
                              role="menuitem"
                            >
                              {subItem.title}
                            </LocalizedClientLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MegaMenu
