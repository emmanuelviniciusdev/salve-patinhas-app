import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const ViewWidth90Percent = styled.View`
  width: 90%;
`

export const ViewWrapperSlideAnimalAdoption = styled.View`
  width: 100%;
  margin-top: 20px;
`

export const ViewMarginY25 = styled.View`
  width: 100%;
  margin: 25px 0;
`

export const ViewMarginBottom20 = styled.View`
  width: 100%;
  margin-bottom: 20px;
`

export const TextTitle = styled.Text`
  font-family: "Inter_700Bold";
  font-size: ${RFValue(26)}px;
  color: ${(props) => props.theme.color};
`
