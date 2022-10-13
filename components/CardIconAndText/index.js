import { getStyledIcon, StyledText, ViewCard } from "./styles"

export default function CardIconAndText({ Icon, text }) {
  const StyledIcon = getStyledIcon(Icon)

  return (
    <ViewCard>
      <StyledIcon />
      <StyledText>{text}</StyledText>
    </ViewCard>
  )
}
