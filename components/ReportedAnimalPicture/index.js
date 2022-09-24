import {
  getStyledCameraOffLineSvg,
  PressableStyledImage,
  StyledImage,
  ViewContent,
} from "./styles"
import RiCameraOffLineSvg from "../../assets/icons/ri_camera-off-line.svg"
import { useState } from "react"
import ImageView from "react-native-image-viewing"

export default function ReportedAnimalPicture({ imageUri }) {
  const [showImageView, setShowImageView] = useState(false)

  const StyledRiCameraOffLineSvg = getStyledCameraOffLineSvg(RiCameraOffLineSvg)

  return (
    <>
      <ViewContent>
        {!imageUri && <StyledRiCameraOffLineSvg />}
        {imageUri && (
          <>
            <ImageView
              imageIndex={0}
              images={[
                {
                  uri: imageUri,
                },
              ]}
              visible={showImageView}
              onRequestClose={() => setShowImageView(false)}
              testID={"ImageViewReportedAnimalPicture"}
            />
            <PressableStyledImage onPress={() => setShowImageView(true)}>
              <StyledImage
                source={{ uri: imageUri }}
                testID={"ImageReportedAnimalPicture"}
              />
            </PressableStyledImage>
          </>
        )}
      </ViewContent>
    </>
  )
}
