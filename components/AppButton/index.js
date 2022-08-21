import {
  getLinearGradientContainer,
  getStyledIcon,
  Pressable,
  Text,
  WrapperIcon,
} from "./styles"
import mdiPawSvg from "../../assets/icons/mdi_paw.svg"

export default function AppButton({
  styleVariant = "default",
  Icon = mdiPawSvg,
  text = "text",
}) {
  const LinearGradientContainer = getLinearGradientContainer(styleVariant)

  const StyledIcon = getStyledIcon(Icon, styleVariant)

  return (
    <Pressable styleVariant={styleVariant}>
      <LinearGradientContainer>
        <WrapperIcon>
          <StyledIcon width={24} height={24} />
        </WrapperIcon>
        <Text styleVariant={styleVariant}>{text}</Text>
      </LinearGradientContainer>
    </Pressable>
  )
}
