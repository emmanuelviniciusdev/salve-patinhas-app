import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const TextWarningMessage = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(20)}px;
  color: ${(props) => props.theme.color};
  text-align: center;
`

export const ViewBottomContent = styled.View`
  width: 100%;
  position: absolute;
  bottom: 30px;
  align-items: center;
`

export const PressableTakePicture = styled.Pressable`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: #ff0000;
`
