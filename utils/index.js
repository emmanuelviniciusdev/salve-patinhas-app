import { showMessage } from "react-native-flash-message"

/**
 * @param {string} message
 * @param {string} description
 * @returns {void}
 */
export function showWarningMessage(message, description = "") {
  showMessage({
    message,
    description,
    type: "warning",
    autoHide: false,
    hideStatusBar: true,
  })
}

/**
 * @param {string} message
 * @param {string} description
 * @returns {void}
 */
export function showErrorMessage(message, description = "") {
  showMessage({
    message,
    description,
    type: "danger",
    autoHide: false,
    hideStatusBar: true,
  })
}

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
