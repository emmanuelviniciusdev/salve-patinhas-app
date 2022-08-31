/**
 * @param {string} text
 * @param {number} size
 * @returns {string|*}
 */
export function limitTextSize(text, size) {
  if (text.length <= size) {
    return text
  }

  size = size - 3
  return text.slice(0, size) + "..."
}
