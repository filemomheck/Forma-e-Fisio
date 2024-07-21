import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/DefaultTheme";
import styles from "./App.module.css";

import { Header } from "./Components/Header";

import { Banner } from "./Components/Banner";
import bannerHome from "./assets/banners/bannerHome.jpg";
import { CardInfoBanner } from "./Components/CardInfoBanner";
import instagramIcon from "./assets/icons/icon-instagram.svg";
import whatsappIcon from "./assets/icons/icon-whatsapp.svg";
import phoneIcon from "./assets/icons/icon-phone.svg";
import locationIcon from "./assets/icons/icon-location.svg";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Banner
        src={bannerHome}
        alt="Colagem de três imagens relacionadas à saúde física e exercícios, apresentando uma pessoa fazendo Pilates, uma aula em grupo com máquinas de Pilates e outra pessoa levantando pesos; com texto promovendo serviços de saúde, incluindo Pilates, musculação, fisioterapia e psicoterapia."
      />
      <section className={styles.CardInfoBanner}>
        <CardInfoBanner
          icon={instagramIcon}
          linkIcon="https://google.com"
          content="@formaefisio"
        />
        <CardInfoBanner
          icon={whatsappIcon}
          linkIcon="https://google.com"
          content="(34) 99913 3993"
        />
        <CardInfoBanner
          icon={phoneIcon}
          linkIcon="https://google.com"
          content="(34) 99913 3993"
        />
        <CardInfoBanner
          icon={locationIcon}
          linkIcon="https://google.com"
          content="Rua Rodolfo Correa, 354, Uberlândia 38400-148"
        />
      </section>
    </ThemeProvider>
  );
}
