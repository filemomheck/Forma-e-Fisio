import { BannerContainer } from "./style";

interface BannerProps {
  src: string;
  alt?: string;
}

export function Banner({ src, alt }: BannerProps) {
  return (
    <BannerContainer>
      <img src={src} alt={alt} />
    </BannerContainer>
  );
}
