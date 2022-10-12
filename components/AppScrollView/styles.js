import styled from "styled-components/native"

export const StyledScrollView = styled.ScrollView`
  width: ${(props) => props.widthInPercentage ?? 90}%;
`
