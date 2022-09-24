import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import { darkTheme, lightTheme } from "../../styles/themes"

export function getStyledTextInput(colorScheme, isTextarea, textareaHeight) {
  const styleAttrs = {
    placeholderTextColor:
      colorScheme === "light"
        ? lightTheme.inputPlaceholderTextColor
        : darkTheme.inputPlaceholderTextColor,
  }

  return styled.TextInput.attrs({ ...styleAttrs })`
    width: 100%;
    font-family: "Nunito_400Regular";
    font-size: ${RFValue(16)}px;
    color: ${(props) => props.theme.color};
    height: ${isTextarea ? `${textareaHeight}px` : "auto"};
  `
}

export const ViewContent = styled.View`
  width: 100%;
`

export const TextLabel = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(16)}px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.color};
`

export const ViewWrapperStyledTextInput = styled.View`
  width: 100%;
  border: solid 2px #000;
  border-radius: 5px;
  padding: 10px;
  background-color: ${(props) => props.theme.inputBackgroundColor};
`
