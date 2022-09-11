import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export function getStyledIcon(icon, colorScheme, isCurrentRoute) {
  return styled(icon).attrs({
    width: 40,
    height: 40,
  })`
    color: ${(props) => {
      if (colorScheme === "light" && isCurrentRoute) {
        return props.theme.primaryColor
      }

      return props.theme.color
    }};
  `
}

export const ViewWrapperAppMenu = styled.View`
  position: absolute;
  bottom: 50px;
`

export const ViewContent = styled.View`
  padding: 15px;
  flex-direction: row;
  justify-content: center;
`

export const PressableIcon = styled.Pressable`
  margin-right: ${(props) => (props.lastPressable ? 0 : 20)}px;
`

export const TextPressableIcon = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: ${RFValue(18)}px;
  color: ${(props) => {
    if (props.colorScheme === "light" && props.isCurrentRoute) {
      return props.theme.primaryColor
    }

    return props.theme.color
  }};
  margin-left: 5px;
`

export const ViewContentPressableIcon = styled.View`
  flex-direction: row;
  align-items: center;
`
