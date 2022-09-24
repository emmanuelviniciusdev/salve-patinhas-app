import AppSafeAreaView from "../../components/AppSafeAreaView"
import {
  getStyledArrowBackIcon,
  getStyledMdiMapMarkerSvg,
  PressableArrowBack,
  StyledScrollView,
  TextAddress,
  ViewAddressIconWrapper,
  ViewAdressContent,
  ViewContent,
  ViewMarginTop10,
  ViewMarginTop20,
} from "./styles"
import ReportedAnimalPicture from "../../components/ReportedAnimalPicture"
import AppButton from "../../components/AppButton"
import AppTextInput from "../../components/AppTextInput"
import MdiCameraSvg from "../../assets/icons/mdi_camera.svg"
import MdiMapMarkerSvg from "../../assets/icons/mdi_map-marker.svg"
import MdiExclamationThick from "../../assets/icons/mdi_exclamation-thick.svg"
import EvaArrowBackFillSvg from "../../assets/icons/eva_arrow-back-fill.svg"
import { useNavigation } from "@react-navigation/native"

export default function ReportAnimal() {
  const navigation = useNavigation()

  const StyledMdiMapMarkerSvg = getStyledMdiMapMarkerSvg(MdiMapMarkerSvg)

  const StyledEvaArrowBackFillSvg = getStyledArrowBackIcon(EvaArrowBackFillSvg)

  const reportedAnimalPictureUrl =
    "https://www.portaldoanimal.org/wp-content/uploads/2018/06/Cinco-pequenas-crian%C3%A7as-salvaram-sozinhas-cachorro-abandonado-em-rua-movimentada1.jpg"
  // const reportedAnimalPictureUrl = null

  return (
    <AppSafeAreaView>
      <ViewContent>
        <PressableArrowBack
          onPress={() => navigation.goBack()}
          testID={"navigateBackButton"}
        >
          <StyledEvaArrowBackFillSvg />
        </PressableArrowBack>
        <StyledScrollView>
          <ReportedAnimalPicture imageUrl={reportedAnimalPictureUrl} />
          <ViewMarginTop10>
            <AppButton Icon={MdiCameraSvg} text={"tirar uma foto"} fullwidth />
          </ViewMarginTop10>
          <ViewMarginTop20>
            <ViewAdressContent>
              <ViewAddressIconWrapper>
                <StyledMdiMapMarkerSvg />
              </ViewAddressIconWrapper>
              <TextAddress>
                Rua Clodovaldo, Jd. Paraíso, Campinas-SP
              </TextAddress>
            </ViewAdressContent>
          </ViewMarginTop20>
          <ViewMarginTop20>
            {/* TODO: Implement character counter. */}
            <AppTextInput
              label={"Descrição"}
              placeholder={"Dê detalhes sobre o animal avistado"}
              isTextarea
            />
          </ViewMarginTop20>
          <ViewMarginTop20>
            <AppButton
              styleVariant={"primary"}
              Icon={MdiExclamationThick}
              text={"reportar"}
              fullwidth
            />
          </ViewMarginTop20>
        </StyledScrollView>
      </ViewContent>
    </AppSafeAreaView>
  )
}
