import AppSafeAreaView from "../../components/AppSafeAreaView"
import {
  getStyledArrowBackIcon,
  ImageAnimalPicture,
  PressableArrowBack,
  TextAddress,
  TextDescription,
  TextLabel,
  ViewContent,
} from "./styles"
import ImageView from "react-native-image-viewing"
import { useEffect, useState } from "react"
import { Pressable, ScrollView, Text } from "react-native"
import EvaArrowBackFillSvg from "../../assets/icons/eva_arrow-back-fill.svg"
import { useNavigation } from "@react-navigation/native"
import AppActivityIndicator from "../../components/AppActivityIndicator"
import appAxios from "../../abstractions/appAxios"
import { showErrorMessage } from "../../utils"

export default function ReportedAnimalDetails({ route }) {
  const { coordinate } = route.params

  const navigation = useNavigation()

  const [showImageView, setShowImageView] = useState(false)

  const [fullAnimalDetails, setFullAnimalDetails] = useState()

  const StyledEvaArrowBackFillSvg = getStyledArrowBackIcon(EvaArrowBackFillSvg)

  /**
   * TODO: Implement backend.
   */
  async function getFullAnimalDetails() {
    try {
      const response = await appAxios.get("reported-animal-details", {
        params: {
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
        },
      })
      setFullAnimalDetails(response.data)
    } catch {
      showErrorMessage(
        "Ocorreu um erro ao tentar obter os detalhes do animal reportado"
      )
    }
  }

  useEffect(() => {
    ;(async () => await getFullAnimalDetails())()
  }, [])

  if (!fullAnimalDetails) {
    return (
      <AppSafeAreaView>
        <AppActivityIndicator size={"large"} />
      </AppSafeAreaView>
    )
  }

  return (
    <AppSafeAreaView>
      <ImageView
        imageIndex={0}
        images={[
          {
            uri: fullAnimalDetails.pictureUrl,
          },
        ]}
        visible={showImageView}
        onRequestClose={() => setShowImageView(false)}
        testID={"ImageViewAnimalPicture"}
      />
      <ViewContent>
        <PressableArrowBack
          onPress={() => navigation.goBack()}
          testID={"navigateBackButton"}
        >
          <StyledEvaArrowBackFillSvg />
        </PressableArrowBack>
        <ScrollView>
          <Pressable onPress={() => setShowImageView(true)}>
            <ImageAnimalPicture
              source={{
                uri: fullAnimalDetails.pictureUrl,
              }}
              testID={"ImageAnimalPicture"}
            />
          </Pressable>
          <TextLabel>Descrição</TextLabel>
          <TextDescription>
            {fullAnimalDetails.description || "-"}
          </TextDescription>
          <TextLabel>Endereço</TextLabel>
          <TextAddress>{fullAnimalDetails.address || "-"}</TextAddress>
        </ScrollView>
      </ViewContent>
    </AppSafeAreaView>
  )
}
