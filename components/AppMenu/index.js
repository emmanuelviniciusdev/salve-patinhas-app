import AppContainer from "../AppContainer"
import {
  getStyledIcon,
  PressableIcon,
  TextPressableIcon,
  ViewContent,
  ViewContentPressableIcon,
  ViewWrapperAppMenu,
} from "./styles"
import GisSearchPoiSvg from "../../assets/icons/gis_search-poi.svg"
import HeroiconsSolidDotsHorizontalSvg from "../../assets/icons/heroicons_solid-dots-horizontal.svg"
import MdiHandHeartSvg from "../../assets/icons/mdi_hand-heart.svg"
import MdiHomeHeartSvg from "../../assets/icons/mdi_home-heart.svg"
import routeNames from "../../routes/routeNames"
import { useColorScheme } from "react-native"
import { useNavigation } from "@react-navigation/native"

/**
 * @param Icon
 * @param {string} textIcon
 * @param {string} routeName
 * @param {string} currentRouteName
 * @returns {JSX.Element}
 */
function PressableMenu({ Icon, textIcon, routeName, currentRouteName }) {
  const navigation = useNavigation()

  const systemColorScheme = useColorScheme()

  const isCurrentRoute = routeName === currentRouteName

  const StyledIcon = getStyledIcon(Icon, systemColorScheme, isCurrentRoute)

  return (
    <PressableIcon onPress={() => navigation.navigate(routeName)}>
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

/**
 * @param {string} currentRouteName
 * @returns {JSX.Element}
 */
export default function AppMenu({ currentRouteName }) {
  return (
    <ViewWrapperAppMenu>
      <AppContainer>
        <ViewContent>
          <PressableMenu
            Icon={GisSearchPoiSvg}
            textIcon={"encontrar"}
            routeName={routeNames.ANIMAL_LOCATION}
            currentRouteName={currentRouteName}
          />
          <PressableMenu
            Icon={MdiHomeHeartSvg}
            textIcon={"adotar"}
            routeName={routeNames.ANIMAL_ADOPTION_LIST}
            currentRouteName={currentRouteName}
          />
          <PressableMenu
            Icon={MdiHandHeartSvg}
            textIcon={"dar para adoção"}
            routeName={routeNames.ANIMAL_ADOPTION_REGISTRATION}
            currentRouteName={currentRouteName}
          />
          <PressableMenu
            Icon={HeroiconsSolidDotsHorizontalSvg}
            textIcon={""}
            routeName={routeNames.MENU_MORE_OPTIONS}
            currentRouteName={currentRouteName}
          />
        </ViewContent>
      </AppContainer>
    </ViewWrapperAppMenu>
  )
}
