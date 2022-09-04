import { ActivityIndicator, useColorScheme } from "react-native"
import { darkTheme, lightTheme } from "../../styles/themes"

export function AppActivityIndicator({ color, size = "small" }) {
  const systemColorScheme = useColorScheme()

  const themeColor =
    systemColorScheme === "dark" ? darkTheme.color : lightTheme.color

  return <ActivityIndicator color={color ?? themeColor} size={size} />
}
