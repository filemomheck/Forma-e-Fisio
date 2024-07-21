import { CardInfoBannerContainer } from "./style";

interface CardInfoBannerProps {
  icon: string;
  linkIcon: string;
  content: string;
}

export function CardInfoBanner({
  icon,
  linkIcon,
  content,
}: CardInfoBannerProps) {
  return (
    <CardInfoBannerContainer>
      <img src={icon} />
      <a href={linkIcon}>{content}</a>
    </CardInfoBannerContainer>
  );
}
