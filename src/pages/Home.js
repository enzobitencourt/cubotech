import React from 'react';
import { Menu } from '../components/menu';
import styled from 'styled-components';
import { Divider } from '@chakra-ui/react';
import Card from '../components/card';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25vh 0;
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


const Container5 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Container4 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 2vw 0 10vw 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Dois cards por linha */
  }

`;

const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
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
  width: 45%;
`;

const ContainerBlog = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 10vh 4vw;
`

function Home() {
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
                </Container>
                <Container3>
                    <Container2>
                        <Titulo2>Nossos Conteúdos</Titulo2>
                        <Divider orientation="horizontal" w="10%" borderColor="#2B2C34" />
                    </Container2>
                    <Container4>
                        <Card
                            titulo="Podcast"
                            imagem="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Black.png"
                        />
                        <Card
                            titulo="Ebooks"
                            imagem="https://cdn.icon-icons.com/icons2/1124/PNG/512/bookoutlinedsymbolofopenedpages_79602.png"
                        />
                        <Card
                            titulo="Youtube"
                            imagem="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                        />
                        <Card
                            titulo="Instagram"
                            imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                        />
                        <Card
                            titulo="Linkedin"
                            imagem="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                        />
                    </Container4>
                </Container3>
            </MainContainer>
            <ContainerBlog>
                <Container5>
                    <Container2>
                        <Titulo2>Artigos do Blog</Titulo2>
                        <Divider orientation="horizontal" w="10%" borderColor="#2B2C34" />
                    </Container2>
                    <Titulo2>Artigos do Blog</Titulo2>
                </Container5>
            </ContainerBlog>
        </>
    );
}

export default Home;
