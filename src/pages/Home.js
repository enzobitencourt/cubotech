import React from 'react';
import { Menu } from '../components/menu';
import styled from 'styled-components';
import { Divider, Image } from '@chakra-ui/react';
import Card from '../components/card';
import Footer from '../components/footer';
import { ChevronRightIcon } from '@chakra-ui/icons';
import CardB from '../components/cardBlog';
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import Antonia from "../assets/Antonia1.jpg"
import Alana from "../assets/Alana1.jpg"
import Imagem from "../assets/fotoblog1.png"
import Direitos from "../assets/direitoshumanos.jpg"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 18vh 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 8vh 0;
  }
`;

const MainContainer = styled.div`
  display: flex;
  padding: 0 4vw;
  flex-direction: column;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4vw;
  align-items: center;
`;

const Container8 = styled.button`
  display: flex;
  flex-direction: row;
  gap: 0.4vw;
  align-items: center;
  text-align: left;
`;


const Container5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Container4 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 2vw 0 10vw 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
  }
`;


const Container6 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-rows: minmax(60vh, auto); 
  gap: 60px;
  align-items: center;
  padding: 2vw 0 2vw 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(20vh, 1fr)); 
    grid-auto-rows: minmax(40vh, auto); 
    padding: 10vw 0 0vw 0;
    gap: 30px;
  }
`;


const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  justify-content: center;
  width: 100%;
`;

const Titulo = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #2b2c34;
  font-size: 40px;
`;

const Titulo2 = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #2b2c34;
  font-size: 18px;
`;

const Texto = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: #9a9494;
  font-size: 14px;
  width: 90%;
`;

const ContainerBlog = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 10vh 4vw;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 2vh; /* Adiciona um espaço abaixo da imagem */
  }
`;

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Menu />
      <MainContainer>
        <Container>
          <Container3>
            <Titulo>Seja Bem-Vindo</Titulo>
            <Container2>
              <Divider orientation="vertical" borderColor="#2B2C34" borderWidth="1px" />
              <Texto>
                Cubotech é o portal do grupo de iniciação científica da Universidade do Vale do Rio dos Sinos, dedicado a explorar a interseção entre direito e tecnologia.
                Descubra artigos e projetos sobre regulamentação de tecnologias, privacidade, cibersegurança e direitos digitais. Junte-se a nós para explorar e inovar nesse campo
                dinâmico.
              </Texto>
            </Container2>
          </Container3>
          <ImageContainer>
            <Image
              src={logo}
              width="55%"
              objectFit='cover'
            />
          </ImageContainer>
        </Container>
        <Container3>
          <Container2>
            <Titulo2>Nossos Conteúdos</Titulo2>
            <Divider orientation="horizontal" w="20" marginLeft='1vw' borderColor="#2B2C34" />
          </Container2>
          <Container4>
            <Card
              titulo="Podcast"
              imagem="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Black.png"
              link=''
            />
            <Card
              titulo="Ebooks"
              imagem="https://cdn.icon-icons.com/icons2/1124/PNG/512/bookoutlinedsymbolofopenedpages_79602.png"
              link=''
            />
            <Card
              titulo="Youtube"
              imagem="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
              link=''
            />
            <Card
              titulo="Instagram"
              imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
              link='https://www.instagram.com/grupocubotech?igsh=dGdpODBiajh1djdy&utm_source=qr'
            />
            <Card
              titulo="Linkedin"
              imagem="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              link='https://www.linkedin.com/in/grupo-cubotech-468100321/'
            />
          </Container4>
        </Container3>
      </MainContainer>
      <ContainerBlog>
        <Container5>
          <Container2>
            <Titulo2>Artigos do Blog</Titulo2>
            <Divider orientation="horizontal" w="20" marginLeft='1vw' borderColor="#2B2C34" />
          </Container2>
          <Container8 onClick={() => navigate('/blog')}>
            <Titulo2>Veja todos</Titulo2>
            <ChevronRightIcon color='black' />
          </Container8>
        </Container5>
        <Container6>
          <CardB path='/blog/article1' titulo='A Governança Pública e a Questão Ambiental: Reflexões sobre a Sustentabilidade na Parceria Público-Privada' autor='Maria Antônia Garcia Kellermann' imagem={Imagem} foto={Antonia} data='23/08/2024' />
          <CardB path='/blog/article2' titulo='Documentos de concepção dos direitos humanos ao longo da história' autor='Alana Bortolini' imagem={Direitos} foto={Alana} data='29/08/2024' />
        </Container6>
      </ContainerBlog>
      <Footer />
    </>
  );
}

export default Home;
