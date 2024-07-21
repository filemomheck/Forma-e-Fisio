import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/DefaultTheme";
import { Banner } from "./Components/Banner";

import bannerHome from "./assets/banners/bannerHome.jpg";
import { Header } from "./Components/Header";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Banner
        src={bannerHome}
        alt="Colagem de três imagens relacionadas à saúde física e exercícios, apresentando uma pessoa fazendo Pilates, uma aula em grupo com máquinas de Pilates e outra pessoa levantando pesos; com texto promovendo serviços de saúde, incluindo Pilates, musculação, fisioterapia e psicoterapia."
      />
    </ThemeProvider>
  );
}
