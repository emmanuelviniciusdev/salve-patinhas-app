import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useEffect, useState } from "react"
import SignIn from "./screens/SignIn"
import AnimalLocation from "./screens/AnimalLocation"
import { ThemeProvider } from "styled-components/native"
import { useColorScheme } from "react-native"
import { darkTheme, lightTheme } from "./styles/themes"

const Stack = createNativeStackNavigator()

export default function App() {
  const [isSignedIn] = useState(true)
  const [colorScheme, setColorScheme] = useState("light")
  const systemColorScheme = useColorScheme()

  function defineColorScheme(colorScheme) {
    if (!colorScheme) {
      setColorScheme("light")
    }
    setColorScheme(colorScheme)
  }

  useEffect(() => defineColorScheme(systemColorScheme), [systemColorScheme])

  return (
    <>
      <ThemeProvider theme={colorScheme === "light" ? lightTheme : darkTheme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isSignedIn ? (
              <>
                <Stack.Screen name={"SignIn"} component={SignIn} />
              </>
            ) : (
              <Stack.Screen
                name={"AnimalLocation"}
                component={AnimalLocation}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <StatusBar style="auto" />
    </>
  )
}
