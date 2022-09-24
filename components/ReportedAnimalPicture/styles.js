import styled from "styled-components/native"

export function getStyledCameraOffLineSvg(Icon) {
  return styled(Icon).attrs({
    width: 111,
    height: 111,
  })`
    color: ${(props) => props.theme.color};
  `
}

export const ViewContent = styled.View`
  width: 100%;
  height: 240px;
  justify-content: center;
  align-items: center;
`

export const StyledImage = styled.Image`
  width: 100%;
  height: 240px;
  border-radius: 5px;
`

export const PressableStyledImage = styled.Pressable`
  width: 100%;
`
