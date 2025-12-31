/**
 * Formats a price in Indian Rupees with proper locale formatting
 * @param priceInr - Price in Rupees (integer)
 * @returns Formatted string with ₹ symbol and comma separators
 */
export function formatRupees(priceInr: number): string {
  return `₹${priceInr.toLocaleString("en-IN")}`
}

/**
 * Formats a price range in Indian Rupees
 * @param minPrice - Minimum price in Rupees
 * @param maxPrice - Maximum price in Rupees
 * @returns Formatted price range string
 */
export function formatRupeesRange(minPrice: number, maxPrice: number): string {
  return `₹${minPrice.toLocaleString("en-IN")} - ₹${maxPrice.toLocaleString("en-IN")}`
}
