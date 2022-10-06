import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { lightTheme } from "../../styles/themes"
import { ThemeProvider } from "styled-components/native"
import FlashMessage from "react-native-flash-message"

export const Stack = createNativeStackNavigator()

/**
 * Wraps screens with parent containers/providers
 *
 * @param {Stack.Screen[]} children
 * @returns {JSX.Element}
 */
export function TestContainer({ children }) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <NavigationContainer>
          <Stack.Navigator>{children}</Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <FlashMessage />
    </>
  )
}
