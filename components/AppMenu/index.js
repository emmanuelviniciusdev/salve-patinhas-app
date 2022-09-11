import AppContainer from "../AppContainer"
import {
  getStyledIcon,
  PressableIcon,
  TextPressableIcon,
  ViewContent,
  ViewContentPressableIcon,
} from "./styles"
import MdiPawSvg from "../../assets/icons/mdi_paw.svg"
import GisSearchPoiSvg from "../../assets/icons/gis_search-poi.svg"
import HeroiconsSolidDotsHorizontal from "../../assets/icons/heroicons_solid-dots-horizontal.svg"
import MdiAccount from "../../assets/icons/mdi_account.svg"
import routeNames from "../../routes/routeNames"
import { useColorScheme } from "react-native"

function PressableMenu({ Icon, textIcon, routeName, currentRouteName }) {
  const systemColorScheme = useColorScheme()

  const isCurrentRoute = routeName === currentRouteName

  const StyledIcon = getStyledIcon(Icon, systemColorScheme, isCurrentRoute)

  return (
    <PressableIcon>
      <ViewContentPressableIcon>
        <StyledIcon />
        {isCurrentRoute && textIcon && (
          <TextPressableIcon
            colorScheme={systemColorScheme}
            isCurrentRoute={isCurrentRoute}
          >
            {textIcon}
          </TextPressableIcon>
        )}
      </ViewContentPressableIcon>
    </PressableIcon>
  )
}

export default function AppMenu({ currentRouteName }) {
  return (
    <AppContainer>
      <ViewContent>
        <PressableMenu
          Icon={GisSearchPoiSvg}
          textIcon={"encontrar"}
          routeName={routeNames.ANIMAL_LOCATION}
          currentRouteName={currentRouteName}
        />
        <PressableMenu
          Icon={MdiPawSvg}
          textIcon={"adotar"}
          routeName={""}
          currentRouteName={currentRouteName}
        />
        <PressableMenu
          Icon={MdiAccount}
          textIcon={"conta"}
          routeName={""}
          currentRouteName={currentRouteName}
        />
        <PressableMenu
          Icon={HeroiconsSolidDotsHorizontal}
          textIcon={""}
          routeName={""}
          currentRouteName={currentRouteName}
        />
      </ViewContent>
    </AppContainer>
  )
}
