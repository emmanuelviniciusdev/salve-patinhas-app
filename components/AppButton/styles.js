import styled from "styled-components/native"
import { LinearGradient } from "expo-linear-gradient"
import { RFValue } from "react-native-responsive-fontsize"

const styleVariantsThemes = {
  default: {
    gradientColors: ["#FFFFFF", "#EAEAEA"],
    color: "#000000",
    borderColor: "#000000",
  },
  primary: {
    gradientColors: ["#A70B0B", "#820606"],
    color: "#F2F5F9",
    borderColor: "#5B0808",
  },
  secondary: {
    gradientColors: ["#F2DC5D", "#C8B445"],
    color: "#F2F5F9",
    borderColor: "#A69327",
  },
}

export function getStyledIcon(IconSvg, styleVariant) {
  return styled(IconSvg)`
    color: ${styleVariantsThemes[styleVariant].color};
  `
}

export function getLinearGradientContainer(styleVariant) {
  return styled(LinearGradient).attrs({
    colors: styleVariantsThemes[styleVariant].gradientColors,
  })`
    padding: 10px 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `
}

export const WrapperIcon = styled.View`
  margin-right: 10px;
`

export const Pressable = styled.Pressable`
  border-radius: 5px;
  border: solid 2px
    ${(props) => styleVariantsThemes[props.styleVariant].borderColor};
`

export const Text = styled.Text`
  font-family: "Nunito_500Medium";
  font-size: ${RFValue(20)}px;
  color: ${(props) => styleVariantsThemes[props.styleVariant].color};
`
