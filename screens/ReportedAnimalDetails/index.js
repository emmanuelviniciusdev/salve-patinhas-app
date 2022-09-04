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
import { useState } from "react"
import { Pressable, ScrollView, Text } from "react-native"
import EvaArrowBackFillSvg from "../../assets/icons/eva_arrow-back-fill.svg"
import { useNavigation } from "@react-navigation/native"

export default function ReportedAnimalDetails({ route }) {
  const { coordinate } = route.params

  const navigation = useNavigation()

  const [showImageView, setShowImageView] = useState(false)

  const StyledEvaArrowBackFillSvg = getStyledArrowBackIcon(EvaArrowBackFillSvg)

  return (
    <AppSafeAreaView>
      <ImageView
        imageIndex={0}
        images={[
          {
            uri: "https://www.portaldoanimal.org/wp-content/uploads/2018/06/Cinco-pequenas-crian%C3%A7as-salvaram-sozinhas-cachorro-abandonado-em-rua-movimentada1.jpg",
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
                uri: "https://www.portaldoanimal.org/wp-content/uploads/2018/06/Cinco-pequenas-crian%C3%A7as-salvaram-sozinhas-cachorro-abandonado-em-rua-movimentada1.jpg",
              }}
            />
          </Pressable>
          <TextLabel>Descrição</TextLabel>
          <TextDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare
            viverra metus at sagittis. Donec nec volutpat nisi. Nullam nec lacus
            vitae orci feugiat posuere. Vestibulum lobortis lectus enim, nec
            malesuada sapien posuere vel. Nullam vel lectus feugiat, cursus
            dolor et, imperdiet urna. Nunc id pulvinar nunc. Curabitur ut tempus
            ipsum. Curabitur a dapibus eros. Duis ornare odio quis lorem
            eleifend, nec tincidunt tellus feugiat. Etiam in elementum justo.
            Suspendisse ac ullamcorper lacus. Praesent imperdiet id turpis vel
            dapibus. Nulla ut ligula blandit, volutpat sem ullamcorper, tempor
            purus. Pellentesque ipsum ipsum, commodo in sem nec, laoreet commodo
            turpis. Aliquam suscipit porttitor imperdiet. Sed sagittis metus eu
            placerat mollis. Pellentesque congue quis dui id sollicitudin.
            Aliquam accumsan efficitur libero eu tincidunt. Sed vitae odio vitae
            orci imperdiet finibus at quis nibh. Curabitur ac quam justo.
            Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae;
          </TextDescription>
          <TextLabel>Endereço</TextLabel>
          <TextAddress>Rua Clodovaldo, Jd. Paraíso, Campinas, SP</TextAddress>
        </ScrollView>
      </ViewContent>
    </AppSafeAreaView>
  )
}
