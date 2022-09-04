import styled from "styled-components/native"

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`
