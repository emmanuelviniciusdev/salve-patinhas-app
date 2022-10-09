import {
  getLinearGradientContainer,
  getStyledAppActivityIndicator,
  getStyledIcon,
  getStyledPressable,
  Text,
  WrapperIcon,
} from "./styles"
import MdiPawSvg from "../../assets/icons/mdi_paw.svg"

export default function AppButton({
  onPress,
  styleVariant = "default",
  Icon = MdiPawSvg,
  text = "text",
  disabled = false,
  loading = false,
  width = 0,
  fullwidth = false,
  testID = "AppButton",
}) {
  if (disabled) {
    styleVariant += "-disabled"
  }

  const LinearGradientContainer = getLinearGradientContainer(styleVariant)

  const StyledAppActivityIndicator = getStyledAppActivityIndicator(styleVariant)

  const StyledIcon = getStyledIcon(Icon, styleVariant)

  const StyledPressable = getStyledPressable(width, fullwidth)

  return (
    <StyledPressable
      onPress={onPress}
      styleVariant={styleVariant}
      disabled={disabled}
      testID={testID}
    >
      <LinearGradientContainer>
        <WrapperIcon>
          {loading && <StyledAppActivityIndicator />}
          {!loading && <StyledIcon width={24} height={24} />}
        </WrapperIcon>
        <Text styleVariant={styleVariant}>{text}</Text>
      </LinearGradientContainer>
    </StyledPressable>
  )
}
