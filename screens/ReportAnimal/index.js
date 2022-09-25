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
import appAxios from "../../abstractions/appAxios"
import {
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
} from "../../utils"
import useCurrentPosition from "../../hooks/useCurrentPosition"

export default function ReportAnimal() {
  const [reportedAnimalDescription, setReportedAnimalDescription] = useState()

  const [isCameraOpened, setIsCameraOpened] = useState(false)

  const [isReportAnimalLoading, setIsReportAnimalLoading] = useState(false)

  const [reportedAnimalPictureURI, setReportedAnimalPictureURI] = useState()

  const [locationPermissionsGranted, currentPosition] = useCurrentPosition(true)

  const navigation = useNavigation()

  const StyledMdiMapMarkerSvg = getStyledMdiMapMarkerSvg(MdiMapMarkerSvg)

  const StyledEvaArrowBackFillSvg = getStyledArrowBackIcon(EvaArrowBackFillSvg)

  function handleTakePicture(data) {
    const pictureBase64URI = `data:image/jpg;base64,${data.base64}`

    setIsCameraOpened(false)
    setReportedAnimalPictureURI(pictureBase64URI)
  }

  async function reportAnimal() {
    if (!locationPermissionsGranted) {
      showWarningMessage(
        "Não foi possível obter sua localização atual",
        "Você precisa fornecer as permissões necessárias"
      )
      return
    }

    const payload = {
      coordinates: {
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
      },
      description: reportedAnimalDescription,
      pictureBase64URI: reportedAnimalPictureURI,
    }

    setIsReportAnimalLoading(true)

    try {
      await appAxios.post("report-animal", payload)
      showSuccessMessage("Parabéns!", "Animal reportado com sucesso")
      navigation.goBack()
    } catch {
      showErrorMessage("Ocorreu um erro ao reportar o animal")
    } finally {
      setIsReportAnimalLoading(false)
    }
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
            <ReportedAnimalPicture imageUri={reportedAnimalPictureURI} />
            <ViewMarginTop10>
              <AppButton
                Icon={MdiCameraSvg}
                text={"tirar uma foto"}
                fullwidth
                onPress={() => setIsCameraOpened(true)}
                disabled={isReportAnimalLoading}
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
                onChangeText={setReportedAnimalDescription}
              />
            </ViewMarginTop20>
            <ViewMarginTop20>
              <AppButton
                styleVariant={"primary"}
                Icon={MdiExclamationThick}
                text={"reportar"}
                fullwidth
                onPress={reportAnimal}
                loading={isReportAnimalLoading}
                disabled={isReportAnimalLoading}
              />
            </ViewMarginTop20>
          </StyledScrollView>
        </ViewContent>
      )}
    </AppSafeAreaView>
  )
}
