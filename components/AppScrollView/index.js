import { StyledScrollView } from "./styles"

export default function AppScrollView({
  children,
  widthInPercentage = 90,
  centerContentVertically = false,
}) {
  const contentContainerStyle = {
    flexGrow: 1,
    alignItems: centerContentVertically ? "center" : null,
  }

  return (
    <StyledScrollView
      widthInPercentage={widthInPercentage}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </StyledScrollView>
  )
}
