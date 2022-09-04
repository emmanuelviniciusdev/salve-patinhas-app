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
  function getFullAnimalDetails() {
    setTimeout(() => {
      setFullAnimalDetails({
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo pretium leo, eget dapibus risus semper et. Nunc cursus blandit mi, vulputate auctor ex tempus at. Vivamus laoreet est non purus tempus malesuada. Donec rhoncus nunc sed rhoncus aliquam. Aenean eget cursus velit, non molestie tellus. Donec eget sem pharetra, iaculis tellus quis, malesuada tortor. Pellentesque in odio magna. Curabitur iaculis, erat nec cursus facilisis, est odio eleifend nisi, vitae euismod lacus elit non sem. Cras viverra massa mauris, sed vestibulum risus placerat at. Aliquam tincidunt sodales elit, id scelerisque lorem dapibus nec. Morbi finibus ex dui. Ut gravida diam a nisl venenatis luctus. Aenean id tortor rhoncus, tempor mauris at, pellentesque nibh.",
        address: "Rua Clodovaldo, Jd. Paraíso, Campinas, SP",
        pictureUrl:
          "https://www.portaldoanimal.org/wp-content/uploads/2018/06/Cinco-pequenas-crian%C3%A7as-salvaram-sozinhas-cachorro-abandonado-em-rua-movimentada1.jpg",
      })
    }, 2000)
  }

  useEffect(() => {
    getFullAnimalDetails()
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
