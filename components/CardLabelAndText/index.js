import { StyledText, TextLabel, ViewCard } from "./styles"

export default function CardLabelAndText({
  label,
  text,
  smallTextSize = false,
}) {
  return (
    <ViewCard>
      <TextLabel>{label}</TextLabel>
      <StyledText smallTextSize={smallTextSize}>{text}</StyledText>
    </ViewCard>
  )
}
