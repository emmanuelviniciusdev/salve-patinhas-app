import {
  getLinearGradientContainer,
  getStyledAppActivityIndicator,
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
  disabled = false,
  loading = false,
}) {
  if (disabled) {
    styleVariant += "-disabled"
  }

  const LinearGradientContainer = getLinearGradientContainer(styleVariant)

  const StyledAppActivityIndicator = getStyledAppActivityIndicator(styleVariant)

  const StyledIcon = getStyledIcon(Icon, styleVariant)

  return (
    <Pressable styleVariant={styleVariant} disabled={disabled}>
      <LinearGradientContainer>
        <WrapperIcon>
          {loading && <StyledAppActivityIndicator />}
          {!loading && <StyledIcon width={24} height={24} />}
        </WrapperIcon>
        <Text styleVariant={styleVariant}>{text}</Text>
      </LinearGradientContainer>
    </Pressable>
  )
}
