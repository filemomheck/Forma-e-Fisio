import { CardSocialMediaBannerContainer } from "./style";

interface CardSocialMediaBannerProps {
  icon: string;
  linkIcon: string;
  content: string;
}

export function CardSocialMediaBanner({
  icon,
  linkIcon,
  content,
}: CardSocialMediaBannerProps) {
  return (
    <CardSocialMediaBannerContainer>
      <img src={icon} />
      <a href={linkIcon}>{content}</a>
    </CardSocialMediaBannerContainer>
  );
}
