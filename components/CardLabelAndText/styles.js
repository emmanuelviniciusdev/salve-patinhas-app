import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const ViewCard = styled.View`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.color};
  border: solid 2px #000;
  border-radius: 5px;
`

export const TextLabel = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.color};
`

export const StyledText = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: ${(props) => (props.smallTextSize ? RFValue(16) : RFValue(26))}px;
  color: ${(props) => props.theme.color};
`
