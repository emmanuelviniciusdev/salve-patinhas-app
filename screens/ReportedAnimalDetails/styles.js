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
  width: 95%;
  max-width: 380px;
  height: 570px;
`

export const PressableArrowBack = styled.Pressable`
  margin-bottom: 35px;
`

export const ImageAnimalPicture = styled.Image`
  width: 100%;
  height: 240px;
  border-radius: 5px;
  margin-bottom: 35px;
`

export const TextLabel = styled.Text`
  font-family: "Inter_400Regular";
  font-size: ${RFValue(16)}px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.color};
`

export const TextDescription = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: ${RFValue(18)}px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.color};
`

export const TextAddress = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.color};
`
