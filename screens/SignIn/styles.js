import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const ContainerImageBackground = styled.ImageBackground`
  flex: 1;
`

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.6);
`

export const WrapperPresentation = styled.View`
  width: 90%;
  align-items: center;
  padding: 10px;
`

export const WrapperAuthButtons = styled.View`
  width: 90%;
`

export const Logo = styled.Image`
  margin-bottom: 50px;
`

export const Title = styled.Text`
  font-family: "Inter_700Bold";
  font-size: ${RFValue(24)}px;
  color: #f2f5f9;
  margin-bottom: 10px;
`

export const Paragraph = styled.Text`
  font-family: "Nunito_500Medium";
  font-size: ${RFValue(16)}px;
  color: #f2f5f9;
  text-align: center;
`
