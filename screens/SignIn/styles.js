import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const ImageAbsoluteDalmatian = styled.Image`
  position: absolute;
  bottom: 10px;
  left: 10px;
`

export const ViewMarginTop5 = styled.View`
  margin-top: 5px;
`

export const Container = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`

export const WrapperPresentation = styled.View`
  width: 90%;
  align-items: center;
  padding: 10px;
`

export const WrapperAuthButtons = styled.View`
  width: 90%;
`

export const Title = styled.Text`
  font-family: "Inter_700Bold";
  font-size: ${RFValue(26)}px;
  color: ${(props) => props.theme.color};
  margin-bottom: 10px;
`

export const Paragraph = styled.Text`
  font-family: "Nunito_500Medium";
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.color};
  text-align: center;
`
