import styled from "styled-components/native"

export const SafeAreaViewContent = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`

export const ViewReportedAnimalPreDetails = styled.View`
  position: absolute;
  top: 30px;
`

export const ViewMenu = styled.View`
  position: absolute;
  bottom: 50px;
`
