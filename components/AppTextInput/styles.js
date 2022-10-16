import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

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
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`

export const ViewWrapperTextTextCounter = styled.View`
  width: 100%;
  align-items: flex-end;
`

export const TextTextCounter = styled.Text`
  font-family: "Inter_400Regular";
  font-style: italic;
  font-size: ${RFValue(14)}px;
  margin-top: 5px;
  color: ${(props) => props.theme.color};
`
