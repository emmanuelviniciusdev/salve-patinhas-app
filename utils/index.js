import { showMessage } from "react-native-flash-message"
import moment from "moment"

/**
 * @param dateOfBirth {string}
 * @returns {string}
 */
export function getAnimalAge(dateOfBirth) {
  const differenceInYears = moment().diff(moment(dateOfBirth), "years")

  if (differenceInYears > 0) {
    return differenceInYears + (differenceInYears > 1 ? " anos" : " ano")
  }

  const differenceInMonths = moment().diff(moment(dateOfBirth), "months")

  return differenceInMonths + (differenceInMonths > 1 ? " meses" : " mês")
}

/**
 * @param {string} message
 * @param {string} description
 * @returns {void}
 */
export function showSuccessMessage(message, description = "") {
  showMessage({
    message,
    description,
    type: "success",
    autoHide: false,
    hideStatusBar: true,
  })
}

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
