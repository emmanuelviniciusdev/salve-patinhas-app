import { Camera, requestCameraPermissionsAsync } from "expo-camera"
import { useRef, useState } from "react"
import {
  PressableTakePicture,
  TextWarningMessage,
  ViewBottomContent,
} from "./styles"
import { showErrorMessage } from "../../utils"

export default function CameraTakePicture({ onTakePicture }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(false)

  const cameraRef = useRef()

  async function requestCameraPermission() {
    await requestCameraPermissionsAsync()

    const { granted } = await Camera.getCameraPermissionsAsync()

    setHasCameraPermission(granted)
  }

  async function takePicture() {
    try {
      const pictureData = await cameraRef.current.takePictureAsync({
        base64: true,
      })
      onTakePicture(pictureData)
    } catch {
      showErrorMessage("Ocorreu um erro ao tentar capturar foto")
    }
  }

  useState(() => {
    ;(async () => {
      await requestCameraPermission()
    })()
  }, [])

  if (!hasCameraPermission) {
    return (
      <TextWarningMessage>
        Por favor, forneça as permissões necessárias para acessar a câmera do
        dispositivo
      </TextWarningMessage>
    )
  }

  return (
    <Camera style={cameraStyles} ref={cameraRef}>
      <ViewBottomContent>
        <PressableTakePicture onPress={takePicture} />
      </ViewBottomContent>
    </Camera>
  )
}

const cameraStyles = { width: "100%", height: "100%" }
