import { TextLabel, ViewContent, ViewWrapperStyledTextInput } from "./styles"
import { useState } from "react"
import CustomTextInput from "./CustomTextInput"

export default function AppTextInput({
  label,
  placeholder,
  onChangeText,
  isTextarea = false,
  textareaHeight = 150,
}) {
  return (
    <ViewContent>
      {label && <TextLabel>{label}</TextLabel>}
      <ViewWrapperStyledTextInput>
        <CustomTextInput
          isTextarea={isTextarea}
          textareaHeight={textareaHeight}
          placeholder={placeholder}
          multiline={isTextarea}
          onChangeText={onChangeText}
        />
      </ViewWrapperStyledTextInput>
    </ViewContent>
  )
}
