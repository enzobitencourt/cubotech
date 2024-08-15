import React from 'react';
import { Menu } from '../components/menu';
import Footer from '../components/footer';
import Integrante from '../components/integrante';
import Integrante2 from '../components/integrante2';
import styled from 'styled-components';
import Daniela from '../assets/Daniela.png'
import Carla from '../assets/Carla.png'
import Luna from '../assets/Luna.png'
import Jamille from '../assets/Jamille.png'
import Alana from '../assets/Alana.png'
import Enzo from '../assets/Enzo.png'
import Unisinos from "../assets/unisinos.jpeg"

const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6vw 4vw;
    gap: 2vw;
    justify-content: center;
    background-image: url(${Unisinos});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Preto fosco com opacidade */
        z-index: 1;
    }

    > * {
        position: relative;
        z-index: 2;
    }

          @media (max-width: 768px) {
    gap: 4vw;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4vw 0;
    background: white;

      @media (max-width: 768px) {
    gap: 4vw;
    padding: 12vw 0;
  }
`

const ContainerBotao = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1vw;

          @media (max-width: 768px) {
    gap: 4vw;
  }
`

const Botao = styled.button`
    background: #4D69FB;
    color: white;
    border-radius: 10px;
    padding: 1vw;
    transition: transform 0.3s ease-in-out; /* Transição suave para o aumento de tamanho */

      &:hover {
    transform: scale(1.05); /* Aumenta o tamanho do contêiner em 5% */
  }
`

const Titulo = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: white;
  font-size: 40px;
  text-align: center;
  text-decoration: underline;

            @media (max-width: 768px) {
     font-size: 30px;
  }
`;

function Sobrenos() {
  return (
    <>
      <Menu />
      <Container2>
        <Titulo>Sobre nós</Titulo>
        <ContainerBotao>
          <Botao>Código de Ética</Botao>
          <Botao>Manifesto de Conduta</Botao>
          <Botao>Política de Publicações</Botao>
        </ContainerBotao>
      </Container2>
      <Container>
        <Integrante nome='Professora Dra. Daniela Pellin'
          texto='Professora, Pesquisadora, Doutora e Pós Doutora do Programa de Mestrado Profissional em Direito da Empresa e dos Negócios da UNISINOS, Daniela é líder do Grupo de Pesquisa CUBOTECH/CNPq.'
          imagem={Daniela}
          link='' />
        <Integrante2 nome='Enzo Bitencourt'
          texto='Aluno pesquisador e graduando em Relações Internacionais pela Unisinos, Enzo é técnico em informática e responsável por toda a parte relacionada a tecnologia do Grupo de Pesquisa CUBOTECH/CNPq.'
          imagem={Enzo}
          link='' />
        <Integrante nome='Alana Bortolini'
          texto='Aluna de Relações Internacionais pela UNISINOS, Alana é responsável pela pesquisa que busca analisar as políticas e diretrizes relacionadas aos princípios ESG promovidas
por organismos internacionais. Além disso, ela é  responsável pelas mídias sociais do grupo CUBOTECH/CNPq.'
          imagem={Alana}
          link='' />
        <Integrante2 nome='Luna Marengo Tasser'
          texto='Luna é atualmente aluna do segundo semestre da faculdade de Direito da Unisinos, seu projeto de pesquisa aborda o impacto da tecnologia jurídica e big data no ambiente jurídico. Além disso, é a responsável pela edição e criação de vídeos e podcasts do grupo CUBOTECH/CNPq.'
          imagem={Luna}
          link='' />
        <Integrante nome='Jamille Nejar'
          texto='Aluna do oitavo semestre da graduação em Direito pela UNISINOS, o principal objeto da pesquisa de Jamille é baseado no processo de construção jurídica das concessões e PPPs à luz da agenda 2030 e dos Direitos Humanos. '
          imagem={Jamille}
          link='' />
        <Integrante2 nome='Carla Susin'
          texto='Estudante do oitavo semestre de Direito pela UNISINOS, a principal área de pesquisa de Carla tem foco em governança corporativa, que objetiva a elaboração de um caderno de diretrizes para a adoção da ética da responsabilidade nas MPEs.'
          imagem={Carla}
          link='' />
      </Container>
      <Footer />
    </>
  );
}

export default Sobrenos;
