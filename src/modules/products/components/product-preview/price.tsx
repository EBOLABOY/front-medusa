import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <div className="flex items-center space-x-2">
      {/* Current Price */}
      <Text
        className={clx("font-bold text-lg", {
          "text-casetify-accent-blue": price.price_type === "sale",
          "text-casetify-primary": price.price_type !== "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>

      {/* Original Price (if on sale) */}
      {price.price_type === "sale" && (
        <Text
          className="line-through text-casetify-neutral-400 text-sm"
          data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}

      {/* Sale Percentage */}
      {price.price_type === "sale" && price.percentage_diff && (
        <div className="bg-casetify-accent-green text-white px-2 py-1 rounded-full text-xs font-bold">
          -{price.percentage_diff}%
        </div>
      )}
    </div>
  )
}
