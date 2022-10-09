import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export function getStyledMdiMapMarkerSvg(icon) {
  return styled(icon).attrs({
    width: 24,
    height: 24,
  })`
    color: ${(props) => props.theme.color};
  `
}

export function getStyledArrowBackIcon(icon) {
  return styled(icon).attrs({
    width: 30,
    height: 30,
  })`
    color: ${(props) => props.theme.color};
  `
}

export const StyledScrollView = styled.ScrollView`
  width: 100%;
`

export const ViewContent = styled.View`
  width: 95%;
  max-width: 380px;
  height: 90%;
`

export const PressableArrowBack = styled.Pressable`
  margin-bottom: 35px;
`

export const ViewMarginTop10 = styled.View`
  width: 100%;
  margin-top: 10px;
`

export const ViewMarginTop20 = styled.View`
  width: 100%;
  margin-top: 20px;
`

export const ViewAdressContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const ViewAddressIconWrapper = styled.View``

export const TextAddress = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(16)}px;
  margin-left: 3px;
  color: ${(props) => props.theme.color};
`
