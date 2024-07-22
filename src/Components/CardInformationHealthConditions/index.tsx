import { CardInformationHealthConditionsContainer } from "./style";

interface CardInformationHealthConditionsProps {
  icon: string;
  title: string;
  content: string;
}

export function CardInformationHealthConditions({
  icon,
  title,
  content,
}: CardInformationHealthConditionsProps) {
  return (
    <CardInformationHealthConditionsContainer>
      <img src={icon} />
      <h1>{title}</h1>
      <p>{content}</p>
    </CardInformationHealthConditionsContainer>
  );
}
