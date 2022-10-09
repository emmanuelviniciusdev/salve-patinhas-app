import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export function getStyledArrowBackIcon(icon) {
  return styled(icon).attrs({
    width: 30,
    height: 30,
  })`
    color: ${(props) => props.theme.color};
  `
}

export const ViewContent = styled.View`
  margin-top: 35px;
`

export const TextTitle = styled.Text`
  font-family: "Inter_700Bold";
  font-size: ${RFValue(22)}px;
  color: ${(props) => props.theme.color};
  margin-top: 20px;
`
