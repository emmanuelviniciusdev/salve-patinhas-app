import { TextInput, useColorScheme } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { darkTheme, lightTheme } from "../../../styles/themes"

export default function CustomTextInput({
  isTextarea,
  textareaHeight,
  ...rest
}) {
  const systemColorScheme = useColorScheme()

  const color =
    systemColorScheme === "light" ? lightTheme.color : darkTheme.color

  const placeholderTextColor =
    systemColorScheme === "light"
      ? lightTheme.inputPlaceholderTextColor
      : darkTheme.inputPlaceholderTextColor

  const height = isTextarea ? textareaHeight : "auto"

  const textAlignVertical = isTextarea ? "top" : "center"

  return (
    <TextInput
      style={{
        width: "100%",
        fontFamily: "Nunito_400Regular",
        fontSize: RFValue(16),
        color,
        height,
      }}
      placeholderTextColor={placeholderTextColor}
      textAlignVertical={textAlignVertical}
      {...rest}
    />
  )
}
