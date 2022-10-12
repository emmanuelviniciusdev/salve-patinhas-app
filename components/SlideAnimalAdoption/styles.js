import styled from "styled-components/native"

export const PressableImageMainPicture = styled.Pressable`
  width: 100%;
`

export const ImageMainPicture = styled.Image`
  width: 100%;
  height: 240px;
`

export const ViewWrapperThumbnails = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-evenly;
`

export const PressableImageThumbnail = styled.Pressable`
  width: 100px;
`

export const ImageThumbnail = styled.Image`
  width: 100%;
  height: 65px;
  border-radius: 5px;
  opacity: ${(props) => (props.isSelected ? 1 : 0.5)};
`
