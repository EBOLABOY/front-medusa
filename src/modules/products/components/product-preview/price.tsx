import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <div className="flex items-center space-x-2">
      <Text
        className={clx("text-sm font-semibold", {
          "text-red-600": price.price_type === "sale",
          "text-gray-900": price.price_type !== "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
      {price.price_type === "sale" && (
        <Text
          className="line-through text-gray-400 text-xs"
          data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}
    </div>
  )
}
