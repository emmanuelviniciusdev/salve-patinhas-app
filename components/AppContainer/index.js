import { StyledView } from "./styles"
import { Shadow } from "react-native-shadow-2"
import { useEffect, useState } from "react"
import { useColorScheme } from "react-native"

function getShadowProps(colorScheme) {
  const shadowProps = {
    light: {
      startColor: "rgba(0, 0, 0, 0.1)",
      style: { borderRadius: 20 },
      offset: [0, 10],
    },
    dark: {
      startColor: "rgba(0, 0, 0, 0.2)",
      style: { borderRadius: 20 },
      offset: [0, 10],
    },
  }

  if (!shadowProps[colorScheme]) {
    return shadowProps.light
  }

  return shadowProps[colorScheme]
}

export default function AppContainer({ children }) {
  const systemColorScheme = useColorScheme()

  const [shadowProps, setShadowProps] = useState(
    getShadowProps(systemColorScheme)
  )

  useEffect(() => {
    setShadowProps(getShadowProps(systemColorScheme))
  }, [systemColorScheme])

  return (
    <Shadow
      startColor={shadowProps.startColor}
      style={shadowProps.style}
      offset={shadowProps.offset}
      distance={20}
    >
      <StyledView>{children}</StyledView>
    </Shadow>
  )
}
