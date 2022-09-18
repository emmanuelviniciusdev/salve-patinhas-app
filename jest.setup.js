import Promise from "promise-polyfill"

global.self = global

/**
 * According to MirageJS documentation it should be defined as an empty object, but I needed to comment this because of
 * an issue involving Jest and timers:
 * https://stackoverflow.com/questions/70014862/receiving-a-globalobj-settimeout-is-not-a-function-error-for-basic-jest-test
 */
// global.window = {}

global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
