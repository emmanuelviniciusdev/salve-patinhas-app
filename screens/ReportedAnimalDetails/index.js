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
    return new Promise((resolve) => {
      setTimeout(() => {
        setFullAnimalDetails({
          description:
            "Tinha uma coleira vermelha. Bem cuidado. Parece ter algum dono!",
          address: "Rua Clodovaldo, Jd. Paraíso, Campinas, SP",
          pictureUrl:
            "https://www.portaldoanimal.org/wp-content/uploads/2018/06/Cinco-pequenas-crian%C3%A7as-salvaram-sozinhas-cachorro-abandonado-em-rua-movimentada1.jpg",
        })
        resolve()
      }, 0)
    })
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
      />
      <ViewContent>
        <PressableArrowBack onPress={() => navigation.goBack()}>
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
