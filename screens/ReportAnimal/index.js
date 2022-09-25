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
import { useState } from "react"
import CameraTakePicture from "../../components/CameraTakePicture"

export default function ReportAnimal() {
  const [reportedAnimalDescription, setReportedAnimalDescription] = useState()

  const [pictureData, setPictureData] = useState()

  const [isCameraOpened, setIsCameraOpened] = useState(false)

  const [reportedAnimalPictureUri, setReportedAnimalPictureUri] = useState()

  const navigation = useNavigation()

  const StyledMdiMapMarkerSvg = getStyledMdiMapMarkerSvg(MdiMapMarkerSvg)

  const StyledEvaArrowBackFillSvg = getStyledArrowBackIcon(EvaArrowBackFillSvg)

  function handleTakePicture(pictureData) {
    const pictureBase64Uri = `data:image/jpg;base64,${pictureData.base64}`

    setPictureData(pictureData)
    setIsCameraOpened(false)
    setReportedAnimalPictureUri(pictureBase64Uri)
  }

  return (
    <AppSafeAreaView>
      {isCameraOpened && (
        <CameraTakePicture onTakePicture={handleTakePicture} />
      )}
      {!isCameraOpened && (
        <ViewContent>
          <PressableArrowBack
            onPress={() => navigation.goBack()}
            testID={"navigateBackButton"}
          >
            <StyledEvaArrowBackFillSvg />
          </PressableArrowBack>
          <StyledScrollView>
            <ReportedAnimalPicture imageUri={reportedAnimalPictureUri} />
            <ViewMarginTop10>
              <AppButton
                Icon={MdiCameraSvg}
                text={"tirar uma foto"}
                fullwidth
                onPress={() => setIsCameraOpened(true)}
              />
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
      )}
    </AppSafeAreaView>
  )
}
