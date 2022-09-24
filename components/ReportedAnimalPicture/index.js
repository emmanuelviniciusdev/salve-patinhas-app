import {
  getStyledCameraOffLineSvg,
  PressableStyledImage,
  StyledImage,
  ViewContent,
} from "./styles"
import RiCameraOffLineSvg from "../../assets/icons/ri_camera-off-line.svg"
import { useState } from "react"
import ImageView from "react-native-image-viewing"

export default function ReportedAnimalPicture({ imageUrl }) {
  const [showImageView, setShowImageView] = useState(false)

  const StyledRiCameraOffLineSvg = getStyledCameraOffLineSvg(RiCameraOffLineSvg)

  return (
    <>
      <ViewContent>
        {!imageUrl && <StyledRiCameraOffLineSvg />}
        {imageUrl && (
          <>
            <ImageView
              imageIndex={0}
              images={[
                {
                  uri: imageUrl,
                },
              ]}
              visible={showImageView}
              onRequestClose={() => setShowImageView(false)}
              testID={"ImageViewReportedAnimalPicture"}
            />
            <PressableStyledImage onPress={() => setShowImageView(true)}>
              <StyledImage
                source={{ uri: imageUrl }}
                testID={"ImageReportedAnimalPicture"}
              />
            </PressableStyledImage>
          </>
        )}
      </ViewContent>
    </>
  )
}
