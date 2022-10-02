import React from "react"
import { View } from "react-native"

export default class CameraFromExpoCamera extends React.Component {
  static async getCameraPermissionsAsync() {
    return { granted: true }
  }

  async takePictureAsync() {
    return { base64: "VGVzdGFuZG8gbyBTYWx2ZSBQYXRpbmhhcyEhIQ==" }
  }

  render() {
    return <View testID={"CameraFromExpoCamera"}>{this.props.children}</View>
  }
}
