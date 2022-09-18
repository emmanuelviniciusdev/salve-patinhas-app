import Promise from "promise-polyfill"

global.self = global

/**
 * According to MirageJS documentation it should be defined as an empty object, but I needed to comment this because of
 * an issue involving Jest and timers:
 * https://stackoverflow.com/questions/70014862/receiving-a-globalobj-settimeout-is-not-a-function-error-for-basic-jest-test
 */
// global.window = {}

/**
 * Workaround for the warning "You called act(async () => ...) without await.".
 * https://github.com/callstack/react-native-testing-library/issues/379
 */
global.Promise = Promise

global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
