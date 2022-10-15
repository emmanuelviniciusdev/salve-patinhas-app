import {
  ImageMainPicture,
  ImageThumbnail,
  PressableImageMainPicture,
  PressableImageThumbnail,
  ViewWrapperThumbnails,
} from "./styles"
import ImageView from "react-native-image-viewing"
import { useState } from "react"

export default function SlideAnimalAdoption({ listPictureUrl = [] }) {
  const noPictureAvailableUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png"

  const [selectedPictureUrl, setSelectedPictureUrl] = useState(
    listPictureUrl[0] ?? noPictureAvailableUrl
  )

  const [showImageView, setShowImageView] = useState(false)

  return (
    <>
      <ImageView
        imageIndex={0}
        images={[
          {
            uri: selectedPictureUrl,
          },
        ]}
        visible={showImageView}
        onRequestClose={() => setShowImageView(false)}
      />
      <PressableImageMainPicture onPress={() => setShowImageView(true)}>
        <ImageMainPicture
          testID={"SlideAnimalAdoptionImageMainPicture"}
          source={{ uri: selectedPictureUrl }}
        />
      </PressableImageMainPicture>
      <ViewWrapperThumbnails>
        {listPictureUrl.map((pictureUrl, index) => (
          <PressableImageThumbnail
            key={index}
            onPress={() => setSelectedPictureUrl(pictureUrl)}
          >
            <ImageThumbnail
              testID={"SlideAnimalAdoptionImageThumbnail"}
              source={{ uri: pictureUrl }}
              isSelected={pictureUrl === selectedPictureUrl}
            />
          </PressableImageThumbnail>
        ))}
      </ViewWrapperThumbnails>
    </>
  )
}
