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
import { Pressable, ScrollView } from "react-native"
import EvaArrowBackFillSvg from "../../assets/icons/eva_arrow-back-fill.svg"
import useNavigation from "../../hooks/useNavigation"
import AppActivityIndicator from "../../components/AppActivityIndicator"
import { showErrorMessage } from "../../utils"
import { getReportedAnimalDetails } from "../../services/SalvePatinhas"

export default function ReportedAnimalDetails({ route }) {
  const { coordinate } = route.params

  const navigation = useNavigation()

  const [showImageView, setShowImageView] = useState(false)

  const [fullAnimalDetails, setFullAnimalDetails] = useState()

  const StyledEvaArrowBackFillSvg = getStyledArrowBackIcon(EvaArrowBackFillSvg)

  async function getFullAnimalDetails() {
    try {
      const response = await getReportedAnimalDetails(coordinate.guid)
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
        <ScrollView>
          <PressableArrowBack
            onPress={() => navigation.goBack()}
            testID={"navigateBackButton"}
          >
            <StyledEvaArrowBackFillSvg />
          </PressableArrowBack>
          <Pressable onPress={() => setShowImageView(true)}>
            <ImageAnimalPicture
              source={{
                uri: fullAnimalDetails.pictureUrl,
              }}
              testID={"ImageAnimalPicture"}
            />
          </Pressable>
          <TextLabel>Descri????o</TextLabel>
          <TextDescription>
            {fullAnimalDetails.description || "-"}
          </TextDescription>
          <TextLabel>Endere??o</TextLabel>
          <TextAddress>{fullAnimalDetails.address || "-"}</TextAddress>
        </ScrollView>
      </ViewContent>
    </AppSafeAreaView>
  )
}
