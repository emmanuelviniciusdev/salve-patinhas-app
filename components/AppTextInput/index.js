import {
  getStyledTextInput,
  TextLabel,
  ViewContent,
  ViewWrapperStyledTextInput,
} from "./styles"
import { useColorScheme } from "react-native"

export default function AppTextInput({
  label,
  placeholder,
  isTextarea = false,
  textareaHeight = 150,
}) {
  const systemColorScheme = useColorScheme()

  const StyledTextInput = getStyledTextInput(
    systemColorScheme,
    isTextarea,
    textareaHeight
  )

  return (
    <ViewContent>
      {label && <TextLabel>{label}</TextLabel>}
      <ViewWrapperStyledTextInput>
        <StyledTextInput
          placeholder={placeholder}
          multiline={isTextarea}
          textAlignVertical={isTextarea ? "top" : "center"}
        />
      </ViewWrapperStyledTextInput>
    </ViewContent>
  )
}
