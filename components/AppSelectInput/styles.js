import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const ViewContent = styled.View`
  width: 100%;
`

export const ViewWrapperPicker = styled.View`
  width: 100%;
  border: solid 2px #000;
  border-radius: 5px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
`

export const TextLabel = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(16)}px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.color};
`
