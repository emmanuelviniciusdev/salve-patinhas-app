import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components/native"
import { useColorScheme } from "react-native"
import { darkTheme, lightTheme } from "./styles/themes"
import { useFonts } from "expo-font"
import { Inter_700Bold, Inter_400Regular } from "@expo-google-fonts/inter"
import {
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito"
import AppLoading from "expo-app-loading/build/AppLoadingNativeWrapper"
import Routes from "./routes"
import FlashMessage from "react-native-flash-message"

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
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
        <Routes isSignedIn={isSignedIn} />
      </ThemeProvider>

      <StatusBar style="auto" />

      <FlashMessage />
    </>
  )
}
