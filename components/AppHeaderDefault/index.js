import { getStyledArrowBackIcon, TextTitle, ViewContent } from "./styles"
import EvaArrowBackFillSvg from "../../assets/icons/eva_arrow-back-fill.svg"
import { Pressable } from "react-native"
import useNavigation from "../../hooks/useNavigation"

export default function AppHeaderDefault({ title }) {
  const StyledEvaArrowBackFillSvg = getStyledArrowBackIcon(EvaArrowBackFillSvg)

  const navigation = useNavigation()

  return (
    <ViewContent>
      <Pressable onPress={() => navigation.goBack()}>
        <StyledEvaArrowBackFillSvg />
      </Pressable>
      {title && <TextTitle>{title}</TextTitle>}
    </ViewContent>
  )
}
