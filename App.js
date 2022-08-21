import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useEffect, useState } from "react"
import SignIn from "./screens/SignIn"
import AnimalLocation from "./screens/AnimalLocation"
import { ThemeProvider } from "styled-components/native"
import { useColorScheme } from "react-native"
import { darkTheme, lightTheme } from "./styles/themes"
import { useFonts } from "expo-font"
import { Inter_700Bold } from "@expo-google-fonts/inter"
import { Nunito_400Regular, Nunito_500Medium } from "@expo-google-fonts/nunito"
import AppLoading from "expo-app-loading/build/AppLoadingNativeWrapper"

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Nunito_400Regular,
    Nunito_500Medium,
  })

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

  if (!fontsLoaded) {
    return <AppLoading />
  }

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
