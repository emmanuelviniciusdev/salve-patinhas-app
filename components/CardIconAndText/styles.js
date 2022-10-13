import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export function getStyledIcon(icon) {
  return styled(icon).attrs({ width: 26, height: 26 })`
    color: ${(props) => props.theme.color};
    margin-right: 10px;
  `
}

export const ViewCard = styled.View`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.color};
  border: solid 2px #000;
  border-radius: 5px;
  flex-direction: row;
`

export const StyledText = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.color};
`
