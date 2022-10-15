import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const ViewMarginTop30 = styled.View`
  margin-top: 30px;
`

export const ViewMarginTop10 = styled.View`
  margin-top: 10px;
`

export const TextNoAnimalsFound = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(22)}px;
  color: ${(props) => props.theme.color};
  text-align: center;
`
