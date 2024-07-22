import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/DefaultTheme";
import styles from "./App.module.css";

import { Header } from "./Components/Header";

import { Banner } from "./Components/Banner";
import bannerHome from "./assets/banners/bannerHome.jpg";
import { CardSocialMediaBanner } from "./Components/CardSocialMediaBanner";
import instagramIcon from "./assets/icons/icon-instagram.svg";
import whatsappIcon from "./assets/icons/icon-whatsapp.svg";
import phoneIcon from "./assets/icons/icon-phone.svg";
import locationIcon from "./assets/icons/icon-location.svg";
import { CardHealthServices } from "./Components/CardHealthServices";

import { CardModalities } from "./Components/CardModalities";
import cover1 from "./assets/covers/cover-modalities-1.jpg";
import cover2 from "./assets/covers/cover-modalities-2.jpg";
import cover3 from "./assets/covers/cover-modalities-3.jpg";
import cover4 from "./assets/covers/cover-modalities-4.jpg";
import cover5 from "./assets/covers/cover-modalities-5.jpg";
import cover6 from "./assets/covers/cover-modalities-6.jpg";
import cover7 from "./assets/covers/cover-modalities-7.jpg";
import cover8 from "./assets/covers/cover-modalities-8.jpg";
import iconArrowDown from "./assets/icons/icon-arrow-down.svg";

import coverSchedules from "./assets/covers/cover-schedules.jpg";
import iconClock from "./assets/icons/icon-clock.svg";

import coverTransformese from "./assets/testimonials/transformese.svg";
import testimonials1 from "./assets/testimonials/testimonials1.jpg";
import testimonials2 from "./assets/testimonials/testimonials2.jpg";
import testimonials3 from "./assets/testimonials/testimonials3.jpg";

import studio1 from "./assets/covers/cover-studio-1.jpg";
import studio2 from "./assets/covers/cover-studio-2.jpg";
import { CardInformationHealthConditions } from "./Components/CardInformationHealthConditions";

import iconStudio1 from "./assets/icons/icon-studio-1.svg";
import iconStudio2 from "./assets/icons/icon-studio-2.svg";
import iconStudio3 from "./assets/icons/icon-studio-3.svg";
import iconStudio4 from "./assets/icons/icon-studio-4.svg";
import iconStudio5 from "./assets/icons/icon-studio-5.svg";
import iconStudio6 from "./assets/icons/icon-studio-6.svg";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Banner
        src={bannerHome}
        alt="Colagem de três imagens relacionadas à saúde física e exercícios, apresentando uma pessoa fazendo Pilates, uma aula em grupo com máquinas de Pilates e outra pessoa levantando pesos; com texto promovendo serviços de saúde, incluindo Pilates, musculação, fisioterapia e psicoterapia."
      />
      <section className={styles.healthServicesHighlights}>
        <div className={styles.cards1HealthServicesHighlights}>
          <CardSocialMediaBanner
            icon={instagramIcon}
            linkIcon="https://www.instagram.com/formaefisio/"
            content="@formaefisio"
          />
          <CardSocialMediaBanner
            icon={whatsappIcon}
            linkIcon="https://wa.me/5534999133993"
            content="(34) 99913 3993"
          />
          <CardSocialMediaBanner
            icon={phoneIcon}
            linkIcon="tel:+5534999133993"
            content="(34) 99913 3993"
          />
          <CardSocialMediaBanner
            icon={locationIcon}
            linkIcon="https://maps.app.goo.gl/DbVwYKqKtUnEVqV36"
            content="Texto Exemplo..."
          />
        </div>
        <div className={styles.contentHealthServicesHighlights}>
          <h1>
            “Há 47 anos transformando dores do corpo e da alma em movimentos
            prazerosos para a vida”
          </h1>
          <h3>Nos Studios Forma e Físio, você encontra:</h3>
        </div>
        <div className={styles.cards2HealthServicesHighlights}>
          <CardHealthServices content="Variedade de modalidades, para diferentes fases da vida e tratamentos." />
          <CardHealthServices content="Equipe com qualificação técnica e científica." />
          <CardHealthServices content="Atendimento individualizado." />
          <CardHealthServices content="Ambiente Premium, altamente equipado, confortável e seguro." />
        </div>
      </section>
      <div className={styles.titleModalities}>
        <h1>Conheça nossas modalidades</h1>
        <img src={iconArrowDown} />
      </div>
      <section className={styles.modalities}>
        <div className={styles.cardsModalities}>
          <CardModalities
            cover={cover1}
            title="Musculação Consciente"
            content="A Musculação Consciente é uma prática que vai além do simples levantamento de pesos. É uma metodologia criada pelo nosso Studio, focada em conquistar os benefícios do treinamento de força, porém, minimizando riscos e promovendo uma saúde física sustentável e duradoura."
          />
          <CardModalities
            cover={cover2}
            title="Musculação Adaptada"
            content="Indicada para pessoas que possuem a necessidade de adaptação devido à dificuldade de mobilidade, recuperação pós-cirúrgica, problemas com equilíbrio, ou situações equivalentes.
É realizada num ambiente reservado, mais calmo e exclusivo."
          />
          <CardModalities
            cover={cover3}
            title="Pilates Clínico e Pilates Condicionamento Físico"
            content="É uma prática que foca na recuperação da força e da flexibilidade geral do corpo, proporcionando mais alongamento e melhorando a postura e eliminando dores específicas."
          />
          <CardModalities
            cover={cover4}
            title="Fisioterapia"
            content="Prática focada na recuperação de lesões e eliminação de dores na coluna vertebral, nos ombros, joelhos, dores miofasciais, articulares, tendinopatias, além de pré e pós-operatórios. Obtemos resultados eficazes e duradouros no menor tempo possível."
          />
          <CardModalities
            cover={cover5}
            title="Power Plate"
            content="O Power Plate é uma plataforma vibratória que faz com que todos os músculos do corpo trabalhem paralelamente, fornecendo uma estimulação superior ao sistema neuromuscular. É usada na reabilitação de atletas e idosos por diminuir o tempo de fisioterapia. O Power Plate traz inúmeros benefícios e é indicado tanto para sedentários quanto para atletas de elite."
          />
          <CardModalities
            cover={cover6}
            title="Formação Completa Método Pilates"
            content="Formação Completa Método Pilates: o melhor e mais completo curso de Pilates de Uberlândia e Região. Dividido em 5 módulos de 2 dias cada, a nossa formação oferece tudo o que você precisa saber e executar para ser um profissional mais qualificado e bem remunerado."
          />
          <CardModalities
            cover={cover7}
            title="Acupuntura"
            content="A acupuntura é uma prática terapêutica originária da medicina tradicional chinesa que envolve a inserção de agulhas finas em pontos específicos do corpo, chamados de pontos de acupuntura. Essa prática alivia dores, reduz estresse e ansiedade, melhora o sono, entre outros benefícios."
          />
          <CardModalities
            cover={cover8}
            title="Aromaterapia"
            content="A aromaterapia é uma prática terapêutica que utiliza óleos essenciais extraídos de plantas aromáticas para promover o bem-estar físico, mental e emocional. Os óleos essenciais são compostos voláteis concentrados que possuem propriedades terapêuticas e podem ser utilizados de diversas formas."
          />
        </div>
      </section>
      <section className={styles.schedules}>
        <div className={styles.scheduleContent}>
          <div>
            <img src={coverSchedules} className={styles.imageCoverSchedule} />
          </div>
          <div className={styles.scheduleContentText}>
            <div className={styles.scheduleContentTitle}>
              <img src={iconClock} />
              <h1>Horários:</h1>
            </div>
            <p>
              Todos os nossos horários são flexíveis conforme a sua necessidade.
              Nossas aulas se iniciam às 06:00, terminando até 20:50. Entre em
              contato conosco clicando no botão abaixo, para encontrarmos o
              melhor horário pra você!
            </p>
            <a href="https://google.com">Entrar em contato agora</a>
          </div>
        </div>
      </section>
      <section className={styles.cta1}>
        <div className={styles.cta1Content}>
          <p>
            Você pode conhecer o nosso espaço, nossos profissionais e nossas
            modalidades de forma gratuita! Dessa forma, você pode analisar na
            prática de que forma podemos te ajudar, e se os nossos serviços
            estão de acordo com a sua necessidade.
          </p>
          <h1>Agende agora mesmo a sua aula experimental gratuita!</h1>
          <div className={styles.ctaBtn}>
            <a href="https://google.com">Agendar aula experimental</a>
          </div>
        </div>
      </section>
      <section className={styles.testimonials}>
        <h1>Transforme-se</h1>
        <img src={coverTransformese} />
        <h1>Veja os depoimentos de alguns alunos</h1>
        <div className={styles.testemonialsImgs}>
          <img src={testimonials1} />
          <img src={testimonials2} />
          <img src={testimonials3} />
        </div>
      </section>
      <section className={styles.studio1}>
        <img src={studio1} alt="" />
        <div className={styles.studio1Content}>
          <h1>Os studios Forma e Fisio oferecem diversas vantagens.</h1>
          <p>
            Se você busca um ambiente confortável e exclusivo, onde não precise
            lidar com músicas altíssimas, dezenas de pessoas em um espaço
            pequeno, ou disputar a atenção de um profissional que atende várias
            pessoas ao mesmo tempo, os Studios Forma e Fisio são ideais para
            você!
          </p>
        </div>
      </section>
      <section className={styles.studio2}>
        <div className={styles.studio2Content}>
          <h1>
            Você será acompanhado (a) por uma equipe altamente capacitada.
          </h1>
          <p>
            Dentro do nosso espaço, a nossa equipe de especialistas está
            preparada para acompanhar você de forma exclusiva e individual.
            Procuramos entender as suas necessidades, objetivos, e encontrar a
            melhor forma de alcançá-los, mesmo que você nunca tenha feito
            musculação ou pilates!
          </p>
          <p>
            Nossos profissionais também são qualificados para trabalhos
            específicos de pré e pós-operatório. Portanto, trabalhamos em
            conformidade com recomendações médicas e científicas para a sua
            segurança.
          </p>
        </div>
        <img src={studio2} alt="" />
      </section>
      <section className={styles.CardsInformationHealthConditions}>
        <h1>
          Nossos Studios também estão preparados para cuidar de casos
          específicos, como:
        </h1>
        <div className={styles.CardsHCContent}>
          <CardInformationHealthConditions
            icon={iconStudio1}
            title="Condição pós-doença"
            content="Para casos de fraqueza e baixo vigor físico após uma doença."
          />
          <CardInformationHealthConditions
            icon={iconStudio2}
            title="Condição pós-cirúrgico"
            content="Para quem busca se recuperar de uma cirurgia com saúde e segurança."
          />
          <CardInformationHealthConditions
            icon={iconStudio3}
            title="Condição pós-fisioterapia"
            content="Buscamos manter os ganhos alcançados na sua fisioterapia, dessa vez focando no longo prazo."
          />
          <CardInformationHealthConditions
            icon={iconStudio4}
            title="Desgastes nas articulações"
            content="Aliviamos a dor e recuperamos desgastes na coluna, joelhos, ombros, quadris, hérnia de disco, problemas de meniscos e tendões."
          />
          <CardInformationHealthConditions
            icon={iconStudio5}
            title="Performance de atletas"
            content="Para atletas ou praticantes de esportes que buscam aumentar a sua performance física."
          />
          <CardInformationHealthConditions
            icon={iconStudio6}
            title="Envelhecimento saudável"
            content="Para idosos que desejam envelhecer com mais bem-estar e disposição física."
          />
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.horary}>
            <div className={styles.openingHours}>
              <h1>Horários de Atendimento:</h1>
              <h3>Segunda a Sexta:</h3>
              <p>Das 07:00 às 12:00 e das 13:00 às 19:00</p>
            </div>
            <div className={styles.classSchedule}>
              <h1>Horário de Aulas:</h1>
              <h3>Segunda a Sexta:</h3>
              <p>Das 06:00 às 20:50</p>
            </div>
          </div>
          <div className={styles.ctaFooter}>
            <a href="">Entrar em contato</a>
          </div>
          <iframe
            className={styles.mapGoogle}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3864668.857771755!2d-53.155404!3d-18.9273799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4450258725b23%3A0x125894c43f93e267!2sForma%20e%20Fisio%20-%20Pilates%2C%20Fisioterapia%2C%20Muscula%C3%A7%C3%A3o%20Consciente!5e0!3m2!1spt-BR!2sbr!4v1721674471011!5m2!1spt-BR!2sbr"
            loading="lazy"
          ></iframe>
        </div>
      </footer>
    </ThemeProvider>
  );
}
