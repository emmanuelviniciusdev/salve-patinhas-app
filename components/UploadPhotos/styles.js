import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export function getStyledPressableDeleteImageIcon(icon) {
  return styled(icon).attrs({ width: RFValue(20), height: RFValue(20) })`
    color: #d91818;
  `
}

export function getStyledPressableAddImageIcon(icon) {
  return styled(icon).attrs({ width: RFValue(36), height: RFValue(36) })`
    color: ${(props) => props.theme.color};
  `
}

export const TextLabel = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.color};
  margin-bottom: 5px;
`

export const ViewContent = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ViewWrapperImage = styled.View`
  width: 160px;
  margin-right: 15px;
  margin-bottom: 15px;
`

export const StyledImage = styled.Image`
  width: 100%;
  height: 110px;
  border-radius: 5px;
`

export const PressableDeleteImage = styled.Pressable`
  background-color: ${(props) => props.theme.backgroundColor};
  border: solid 2px #d91818;
  border-radius: 5px;
  padding: 5px;
  align-self: flex-start;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
`

export const PressableAddImage = styled.Pressable`
  width: 160px;
  height: 110px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.inputPlaceholderTextColor};
  align-items: center;
  justify-content: center;
  border: solid 2px #000;
  border-radius: 5px;
`
