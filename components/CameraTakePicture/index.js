import { Camera, requestCameraPermissionsAsync } from "expo-camera"
import { useEffect, useRef, useState } from "react"
import {
  PressableTakePicture,
  TextWarningMessage,
  ViewBottomContent,
} from "./styles"
import { showErrorMessage } from "../../utils"
import { useWindowDimensions } from "react-native"

export default function CameraTakePicture({ onTakePicture }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(false)

  const cameraRef = useRef()

  const { width } = useWindowDimensions()

  const height = Math.round((width * 16) / 9)

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

  useEffect(() => {
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
    <Camera style={{ width: "100%", height }} ref={cameraRef} ratio={"16:9"}>
      <ViewBottomContent>
        <PressableTakePicture
          testID={"PressableTakePicture"}
          onPress={takePicture}
        />
      </ViewBottomContent>
    </Camera>
  )
}

const cameraStyles = { width: "100%", height: "100%" }
