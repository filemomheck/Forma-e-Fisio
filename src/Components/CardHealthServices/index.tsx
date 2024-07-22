import { CardHealthServicesContainer } from "./style";
import iconCheck from "../../assets/icons/icon-check.svg";

type CardHealthServicesProps = {
  content: string;
};

export function CardHealthServices({ content }: CardHealthServicesProps) {
  return (
    <CardHealthServicesContainer>
      <img src={iconCheck} />
      <h1>{content}</h1>
    </CardHealthServicesContainer>
  );
}
