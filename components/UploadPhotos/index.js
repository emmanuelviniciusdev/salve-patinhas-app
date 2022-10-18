import {
  getStyledPressableAddImageIcon,
  getStyledPressableDeleteImageIcon,
  PressableAddImage,
  PressableDeleteImage,
  StyledImage,
  TextLabel,
  ViewContent,
  ViewWrapperImage,
} from "./styles"
import MdiTrashCanSvg from "../../assets/icons/mdi_trash-can.svg"
import MdiPlusSvg from "../../assets/icons/mdi_plus.svg"
import { useState } from "react"
import * as ImagePicker from "expo-image-picker"
import { getBase64URI } from "../../utils"

/**
 *
 * @param label {string}
 * @param selectionLimit {number}
 * @param onSelectImage {callback}
 * @returns {JSX.Element}
 * @constructor
 */
export default function UploadPhotos({
  label,
  selectionLimit = 4,
  onSelectImage,
}) {
  const [selectedImages, setSelectedImages] = useState([])

  const StyledPressableDeleteImageIcon =
    getStyledPressableDeleteImageIcon(MdiTrashCanSvg)

  const StyledPressableAddImageIcon = getStyledPressableAddImageIcon(MdiPlusSvg)

  const showPressableAddImage = selectedImages.length < selectionLimit

  async function onPickImage() {
    const imagePickerResponse = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsMultipleSelection: true,
      selectionLimit,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })

    if (imagePickerResponse.cancelled) {
      return
    }

    const injectBase64URIInSelectedImages = ({ base64, ...rest }) => ({
      ...rest,
      base64URI: getBase64URI(base64),
    })

    const responseSelectedImages = (
      imagePickerResponse.selected ?? [imagePickerResponse]
    )
      .slice(0, selectionLimit)
      .map(injectBase64URIInSelectedImages)

    setSelectedImages(responseSelectedImages)

    if (onSelectImage) {
      onSelectImage(responseSelectedImages)
    }
  }

  function removeImage(index) {
    const updatedSelectedImages = selectedImages.filter(
      (_, selectedImageIndex) => selectedImageIndex !== index
    )

    setSelectedImages(updatedSelectedImages)
  }

  return (
    <>
      {label && <TextLabel>{label}</TextLabel>}
      <ViewContent>
        {selectedImages.map((imageData, index) => (
          <ViewWrapperImage key={index}>
            <PressableDeleteImage onPress={() => removeImage(index)}>
              <StyledPressableDeleteImageIcon />
            </PressableDeleteImage>
            <StyledImage source={{ uri: imageData.base64URI }} />
          </ViewWrapperImage>
        ))}
        {showPressableAddImage && (
          <PressableAddImage
            testID={"UploadPhotosPressableAddImage"}
            onPress={onPickImage}
          >
            <StyledPressableAddImageIcon />
          </PressableAddImage>
        )}
      </ViewContent>
    </>
  )
}
