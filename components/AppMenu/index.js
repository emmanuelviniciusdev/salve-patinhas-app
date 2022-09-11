import AppContainer from "../AppContainer"
import {
  getStyledIcon,
  PressableIcon,
  TextPressableIcon,
  ViewContent,
  ViewContentPressableIcon,
  ViewWrapperAppMenu,
} from "./styles"
import MdiPawSvg from "../../assets/icons/mdi_paw.svg"
import GisSearchPoiSvg from "../../assets/icons/gis_search-poi.svg"
import HeroiconsSolidDotsHorizontal from "../../assets/icons/heroicons_solid-dots-horizontal.svg"
import MdiAccount from "../../assets/icons/mdi_account.svg"
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
            Icon={MdiPawSvg}
            textIcon={"adotar"}
            routeName={routeNames.ANIMAL_ADOPTION}
            currentRouteName={currentRouteName}
          />
          <PressableMenu
            Icon={MdiAccount}
            textIcon={"conta"}
            routeName={routeNames.USER_ACCOUNT}
            currentRouteName={currentRouteName}
          />
          <PressableMenu
            Icon={HeroiconsSolidDotsHorizontal}
            textIcon={""}
            routeName={routeNames.MENU_MORE_OPTIONS}
            currentRouteName={currentRouteName}
          />
        </ViewContent>
      </AppContainer>
    </ViewWrapperAppMenu>
  )
}
