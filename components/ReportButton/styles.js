import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export function getStyledIcon(IconSvg) {
  return styled(IconSvg).attrs({ width: 30, height: 30 })`
    color: #f2f5f9;
  `
}

export const StyledPressable = styled.Pressable`
  background-color: #ff0000;
  border: solid 3px #980000;
  border-radius: 10px;
`

export const ViewContent = styled.View`
  flex-direction: row;
  padding: 10px;
`

export const StyledText = styled.Text`
  color: #f2f5f9;
  font-family: "Nunito_700Bold";
  font-size: ${RFValue(20)}px;
  margin-left: 5px;
`
