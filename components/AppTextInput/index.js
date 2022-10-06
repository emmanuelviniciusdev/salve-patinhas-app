import {
  TextLabel,
  TextTextCounter,
  ViewContent,
  ViewWrapperStyledTextInput,
  ViewWrapperTextTextCounter,
} from "./styles"
import CustomTextInput from "./CustomTextInput"
import { useState } from "react"

export default function AppTextInput({
  label,
  placeholder,
  onChangeText,
  maxLength,
  hideTextCounter = false,
  isTextarea = false,
  textareaHeight = 150,
  testID = "AppTextInput",
}) {
  const [inputedText, setInputedText] = useState("")

  const inputedTextLength = inputedText.length

  const textCounter = `${inputedTextLength}/${maxLength}`

  const showTextCounter = !hideTextCounter && maxLength !== undefined

  return (
    <ViewContent>
      {label && <TextLabel>{label}</TextLabel>}
      <ViewWrapperStyledTextInput>
        <CustomTextInput
          testID={testID}
          isTextarea={isTextarea}
          textareaHeight={textareaHeight}
          placeholder={placeholder}
          multiline={isTextarea}
          maxLength={maxLength}
          onChangeText={(text) => {
            setInputedText(text)
            onChangeText(text)
          }}
        />
      </ViewWrapperStyledTextInput>
      {showTextCounter && (
        <ViewWrapperTextTextCounter>
          <TextTextCounter>{textCounter}</TextTextCounter>
        </ViewWrapperTextTextCounter>
      )}
    </ViewContent>
  )
}
