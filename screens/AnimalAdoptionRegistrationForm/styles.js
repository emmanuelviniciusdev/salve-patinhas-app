import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const MarginTop50 = styled.View`
  margin-top: 50px;
`

export const MarginTop10 = styled.View`
  margin-top: 10px;
`

export const MarginY10 = styled.View`
  margin: 10px 0;
`

export const TextTitle = styled.Text`
  font-family: "Inter_700Bold";
  font-size: ${RFValue(18)}px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.color};
`
