const jestPreset = require("@testing-library/react-native/jest-preset")

module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__tests__/__mocks__/svgMock.js",
  },
  setupFiles: [...jestPreset.setupFiles],
  setupFilesAfterEnv: ["./jest.setup.js"],
}
