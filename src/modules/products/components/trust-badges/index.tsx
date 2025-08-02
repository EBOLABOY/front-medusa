const TrustBadges = () => {
  const badges = [
    {
      icon: "✅",
      title: "100% Satisfaction Guaranteed",
      subtitle: "10-day return policy"
    },
    {
      icon: "🛡️",
      title: "6-Month Product Warranty",
      subtitle: "Quality assurance"
    },
    {
      icon: "🌱",
      title: "Eco-Friendly Materials",
      subtitle: "Sustainable production"
    },
    {
      icon: "🚚",
      title: "Fast & Free Shipping",
      subtitle: "On orders over $50"
    }
  ]

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="grid grid-cols-2 gap-3">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="text-lg">{badge.icon}</span>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-900 leading-tight">
                {badge.title}
              </p>
              <p className="text-xs text-gray-600">
                {badge.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBadges
