import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-semibold text-casetify-primary">
          {title}
        </h4>
        {current && (
          <span className="text-sm text-casetify-neutral-600 bg-casetify-neutral-100 px-2 py-1 rounded-full">
            Selected: {current}
          </span>
        )}
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v) => {
          const isSelected = v === current
          return (
            <button
              onClick={() => updateOption(option.id, v)}
              key={v}
              className={clx(
                "relative border-2 rounded-xl p-4 text-center font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-casetify-accent-blue focus:ring-offset-2",
                {
                  "border-casetify-accent-blue bg-casetify-accent-blue text-white shadow-lg": isSelected,
                  "border-casetify-neutral-300 bg-white text-casetify-neutral-700 hover:border-casetify-accent-blue hover:bg-casetify-neutral-50": !isSelected,
                  "opacity-50 cursor-not-allowed": disabled,
                }
              )}
              disabled={disabled}
              data-testid="option-button"
            >
              {/* Selection Indicator */}
              {isSelected && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-casetify-accent-green rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              <span className="block text-sm font-medium">{v}</span>

              {/* Color preview for color options */}
              {title.toLowerCase().includes('color') && (
                <div
                  className="w-6 h-6 rounded-full mx-auto mt-2 border-2 border-white shadow-sm"
                  style={{ backgroundColor: v.toLowerCase() }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Helper Text */}
      <p className="text-xs text-casetify-neutral-500">
        Choose your preferred {title.toLowerCase()} from the options above
      </p>
    </div>
  )
}

export default OptionSelect
