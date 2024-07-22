import { CardModalitiesContainer } from "./style";

interface CardModalitiesProps {
  cover: string;
  title: string;
  content: string;
}

export function CardModalities({ cover, title, content }: CardModalitiesProps) {
  return (
    <CardModalitiesContainer>
      <img src={cover} />
      <h1>{title}</h1>
      <p>{content}</p>
    </CardModalitiesContainer>
  );
}
