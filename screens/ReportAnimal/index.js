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
import useNavigation from "../../hooks/useNavigation"
import { useEffect, useState } from "react"
import CameraTakePicture from "../../components/CameraTakePicture"
import {
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
} from "../../utils"
import useCurrentPosition from "../../hooks/useCurrentPosition"
import { getAddressByCoordinates } from "../../services/GoogleMaps"
import AppActivityIndicator from "../../components/AppActivityIndicator"
import { postReportAnimal } from "../../services/SalvePatinhas"

export default function ReportAnimal() {
  const [reportedAnimalDescription, setReportedAnimalDescription] = useState()

  const [isCameraOpened, setIsCameraOpened] = useState(false)

  const [isReportAnimalLoading, setIsReportAnimalLoading] = useState(false)

  const [reportedAnimalPictureURI, setReportedAnimalPictureURI] = useState()

  const [currentUserAddress, setCurrentUserAddress] = useState()

  const [locationPermissionsGranted, currentPosition] = useCurrentPosition(true)

  const navigation = useNavigation()

  const StyledMdiMapMarkerSvg = getStyledMdiMapMarkerSvg(MdiMapMarkerSvg)

  const StyledEvaArrowBackFillSvg = getStyledArrowBackIcon(EvaArrowBackFillSvg)

  const loadingScreen = !currentUserAddress

  function handleTakePicture(data) {
    const pictureBase64URI = `data:image/jpg;base64,${data.base64}`

    setIsCameraOpened(false)
    setReportedAnimalPictureURI(pictureBase64URI)
  }

  async function reportAnimal() {
    if (!locationPermissionsGranted) {
      showWarningMessage(
        "N??o foi poss??vel obter sua localiza????o atual",
        "Voc?? precisa fornecer as permiss??es necess??rias"
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
      await postReportAnimal(payload)
      showSuccessMessage("Parab??ns!", "Animal reportado com sucesso")
      navigation.goBack()
    } catch {
      showErrorMessage("Ocorreu um erro ao reportar o animal")
    } finally {
      setIsReportAnimalLoading(false)
    }
  }

  async function setCurrentUserAddressByCoordinates(currentPosition) {
    if (!currentPosition) {
      return
    }

    try {
      const address = await getAddressByCoordinates(
        currentPosition.coords.latitude,
        currentPosition.coords.longitude
      )

      setCurrentUserAddress(address)
    } catch {
      showErrorMessage("Ocorreu um erro ao tentar obter endere??o")
    }
  }

  useEffect(() => {
    ;(async () => {
      await setCurrentUserAddressByCoordinates(currentPosition)
    })()
  }, [currentPosition])

  if (loadingScreen) {
    return (
      <AppSafeAreaView>
        <AppActivityIndicator size={"large"} />
      </AppSafeAreaView>
    )
  }

  return (
    <AppSafeAreaView>
      {isCameraOpened && (
        <CameraTakePicture onTakePicture={handleTakePicture} />
      )}
      {!isCameraOpened && (
        <ViewContent>
          <StyledScrollView>
            <PressableArrowBack
              onPress={() => navigation.goBack()}
              testID={"navigateBackButton"}
            >
              <StyledEvaArrowBackFillSvg />
            </PressableArrowBack>
            <ReportedAnimalPicture imageUri={reportedAnimalPictureURI} />
            <ViewMarginTop10>
              <AppButton
                Icon={MdiCameraSvg}
                text={"tirar uma foto"}
                fullwidth
                onPress={() => setIsCameraOpened(true)}
                disabled={isReportAnimalLoading}
                testID={"AppButtonOpenTakePicture"}
              />
            </ViewMarginTop10>
            <ViewMarginTop20>
              <ViewAdressContent>
                <ViewAddressIconWrapper>
                  <StyledMdiMapMarkerSvg />
                </ViewAddressIconWrapper>
                <TextAddress>{currentUserAddress}</TextAddress>
              </ViewAdressContent>
            </ViewMarginTop20>
            <ViewMarginTop20>
              <AppTextInput
                label={"Descri????o"}
                placeholder={"D?? detalhes sobre o animal avistado"}
                isTextarea
                onChangeText={setReportedAnimalDescription}
                maxLength={200}
                testID={"AppTextInputReportedAnimalDescription"}
              />
            </ViewMarginTop20>
            <ViewMarginTop20>
              <AppButton
                testID={"AppButtonReportAnimal"}
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
