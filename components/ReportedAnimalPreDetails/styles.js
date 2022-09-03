import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import MdiOpenInFullRoundedSvg from "../../assets/icons/mdi_open-in-full-rounded.svg"

export const ViewContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
  min-height: 80px;
`

export const WrapperActivityIndicator = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 80px;
  margin: 10px;
`

export const ImageAnimalPicture = styled.Image`
  width: 100px;
  height: 65px;
  border-radius: 3px;
  margin-right: 10px;
`

export const ViewDetails = styled.View``

export const TextPreDescription = styled.Text`
  font-family: "Inter_700Bold";
  font-size: ${RFValue(14)}px;
  width: 230px;
  color: ${(props) => props.theme.color};
`

export const TextAddress = styled.Text`
  font-family: "Nunito_400Regular";
  font-size: ${RFValue(14)}px;
  width: 230px;
  color: ${(props) => props.theme.color};
`

export const IconExpand = styled(MdiOpenInFullRoundedSvg).attrs({
  width: RFValue(22),
  height: RFValue(22),
})`
  color: ${(props) => props.theme.color};
  position: absolute;
  bottom: -2px;
  right: 0;
`
