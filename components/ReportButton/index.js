import { Shadow } from "react-native-shadow-2"
import {
  getStyledIcon,
  StyledPressable,
  StyledText,
  ViewContent,
} from "./styles"
import BiExclamationDiamondSvg from "../../assets/icons/bi_exclamation-diamond.svg"
import { useNavigation } from "@react-navigation/native"
import routeNames from "../../routes/routeNames"

const shadowProps = {
  startColor: "rgba(255, 0, 0, 0.3)",
  style: { borderRadius: 20 },
  offset: [0, 5],
}

export default function ReportButton() {
  const navigation = useNavigation()

  const Icon = getStyledIcon(BiExclamationDiamondSvg)

  return (
    <Shadow
      startColor={shadowProps.startColor}
      style={shadowProps.style}
      offset={shadowProps.offset}
      distance={20}
    >
      <StyledPressable
        onPress={() => navigation.navigate(routeNames.REPORT_ANIMAL)}
      >
        <ViewContent>
          <Icon />
          <StyledText>reportar</StyledText>
        </ViewContent>
      </StyledPressable>
    </Shadow>
  )
}
