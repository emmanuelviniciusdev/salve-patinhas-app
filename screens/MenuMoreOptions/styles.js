import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export function getStyledIcon(icon) {
  return styled(icon).attrs({ width: 36, height: 36 })`
    color: ${(props) => props.theme.color};
  `
}

export const ViewContent = styled.View`
  width: 90%;
  max-width: 360px;
  height: 70%;
`

export const ViewWrapperPressableCloseIcon = styled.View`
  width: 90%;
  max-width: 360px;
  height: 70px;
  flex-direction: column;
  align-items: flex-end;
`

export const ViewPressableMenuOptionContent = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextPressableMenuOption = styled.Text`
  margin-left: 5px;
  font-size: ${RFValue(24)}px;
`
