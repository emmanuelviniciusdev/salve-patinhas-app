import { Picker } from "@react-native-picker/picker"
import { TextLabel, ViewContent, ViewWrapperPicker } from "./styles"
import { RFValue } from "react-native-responsive-fontsize"
import { useColorScheme } from "react-native"
import { darkTheme, lightTheme } from "../../styles/themes"

/**
 *
 * @param label {string}
 * @param items {Array<{label: string; value: string}>}
 * @param placeholder {string}
 * @param selectedValue {string}
 * @param onValueChange {callback}
 * @returns {JSX.Element}
 * @constructor
 */
export default function AppSelectInput({
  label,
  items = [],
  selectedValue = null,
  onValueChange,
  placeholder = "Selecionar...",
}) {
  const systemColorScheme = useColorScheme()

  const color =
    systemColorScheme === "light" ? lightTheme.color : darkTheme.color

  const placeholderTextColor =
    systemColorScheme === "light"
      ? lightTheme.inputPlaceholderTextColor
      : darkTheme.inputPlaceholderTextColor

  return (
    <ViewContent>
      {label && <TextLabel>{label}</TextLabel>}
      <ViewWrapperPicker>
        <Picker
          style={{
            fontFamily: "Nunito_400Regular",
            fontSize: RFValue(16),
            color: selectedValue === null ? placeholderTextColor : color,
          }}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          {placeholder && <Picker.Item label={placeholder} value={null} />}
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </ViewWrapperPicker>
    </ViewContent>
  )
}
