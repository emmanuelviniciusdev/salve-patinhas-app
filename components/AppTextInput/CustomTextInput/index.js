import { TextInput, useColorScheme } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { darkTheme, lightTheme } from "../../../styles/themes"
import MaskInput from "react-native-mask-input"

export default function CustomTextInput({
  isTextarea,
  textareaHeight,
  mask,
  ...rest
}) {
  const systemColorScheme = useColorScheme()

  const TextInputToRender = mask ? MaskInput : TextInput

  const color =
    systemColorScheme === "light" ? lightTheme.color : darkTheme.color

  const placeholderTextColor =
    systemColorScheme === "light"
      ? lightTheme.inputPlaceholderTextColor
      : darkTheme.inputPlaceholderTextColor

  const height = isTextarea ? textareaHeight : "auto"

  const textAlignVertical = isTextarea ? "top" : "center"

  return (
    <TextInputToRender
      style={{
        width: "100%",
        fontFamily: "Nunito_400Regular",
        fontSize: RFValue(16),
        color,
        height,
      }}
      placeholderTextColor={placeholderTextColor}
      textAlignVertical={textAlignVertical}
      mask={mask}
      {...rest}
    />
  )
}
