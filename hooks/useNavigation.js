import { useNavigation } from "@react-navigation/native"

/**
 * This is a workaround to make possible to mock the hook "useNavigation()" in the tests.
 *
 * It's not possible to mock this hook using "jest.spyOn" because it throws "Cannot redefine property..." error.
 *
 * The solution I found (mocking the entire library using "jest.mock") impacted test speed.
 */

export default function () {
  return useNavigation()
}
