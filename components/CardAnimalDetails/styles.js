import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const ViewCard = styled.View`
  width: 100%;
  max-width: 360px;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  padding: 10px;
  border: solid 2px #000;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`

export const ImageAnimalPicture = styled.Image`
  width: 130px;
  height: 100px;
  border-radius: 5px;
`

export const ViewWrapperInformationAndAction = styled.View`
  margin-left: 10px;
  width: 60%;
`

export const ViewWrapperInformation = styled.View`
  margin-bottom: 5px;
`

export const TextTitle = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: ${RFValue(20)}px;
`

export const TextSubtitle = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(18)}px;
`
