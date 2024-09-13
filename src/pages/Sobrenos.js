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
import Antonia from "../assets/Antonia.png"
import Laura from "../assets/Laura.png"
import Luciani from "../assets/Luciani.png"
import Otavio from "../assets/Otavio.png"
import Joana from "../assets/Joana.png"

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
    gap: 6vw;
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
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <Menu />
      <Container2>
        <Titulo>Sobre nós</Titulo>
        <ContainerBotao>
          <Botao onClick={() => handleClick('https://drive.google.com/file/d/1njf5nChHHt0aKNZMqpjzRbjgMqEwb7cc/view?usp=sharing')}>Código de Ética</Botao>
          <Botao onClick={() => handleClick('https://drive.google.com/file/d/1sCB8wQUJmMzKj-A4f4XxOh0LAR8mEuYo/view?usp=sharing')}>Manifesto de Conduta</Botao>
          <Botao onClick={() => handleClick('https://example.com/codigo-de-etica')}>Política de Publicações</Botao>
        </ContainerBotao>
      </Container2>
      <Container>
        <Integrante nome='Professora Dra. Daniela Pellin'
          texto='Professora, Pesquisadora, Doutora e Pós Doutora do Programa de Mestrado Profissional em Direito da Empresa e dos Negócios da UNISINOS, Daniela é líder do Grupo de Pesquisa CUBOTECH/CNPq.'
          imagem={Daniela}
          link='http://lattes.cnpq.br/8962572217907641' />
        <Integrante2 nome='Alana Bortolini'
          texto='Aluna de Relações Internacionais pela UNISINOS, Alana é responsável pela pesquisa que busca analisar as políticas e diretrizes relacionadas aos princípios ESG promovidas
          por organismos internacionais. Além disso, ela é  responsável pelas mídias sociais do grupo CUBOTECH/CNPq.'
          imagem={Alana}
          link='' />
        <Integrante nome='Antônia Kellermann'
          texto='Acadêmica de Direito na UNISINOS e pesquisadora, Antonia concentra seus estudos na interseção entre políticas públicas, sustentabilidade e desenvolvimento socioeconômico. Suas pesquisas exploram a colaboração internacional e o impacto na legislação brasileira, com foco em temas que envolvem governança pública e práticas sustentáveis.'
          imagem={Antonia}
          link='http://lattes.cnpq.br/0473265581411672' />
        <Integrante2 nome='Carla Susin'
          texto='Estudante do oitavo semestre de Direito pela UNISINOS, a principal área de pesquisa de Carla tem foco em governança corporativa, que objetiva a elaboração de um caderno de diretrizes para a adoção da ética da responsabilidade nas MPEs.'
          imagem={Carla}
          link='https://lattes.cnpq.br/7109506118369972' />
        <Integrante nome='Enzo Bitencourt'
          texto='Aluno pesquisador e graduando em Relações Internacionais pela Unisinos, Enzo é técnico em informática e responsável por toda a parte relacionada a tecnologia do Grupo de Pesquisa CUBOTECH/CNPq.'
          imagem={Enzo}
          link='http://lattes.cnpq.br/5697554593364315' />
        <Integrante2 nome='Jamille Nejar'
          texto='Aluna do oitavo semestre da graduação em Direito pela UNISINOS, o principal objeto da pesquisa de Jamille é baseado no processo de construção jurídica das concessões e PPPs à luz da agenda 2030 e dos Direitos Humanos.'
          imagem={Jamille}
          link='' />
        <Integrante nome='Joana Moreira Traiber'
          texto='Joana é aluna de Relações Internacionais na UNISINOS e pesquisadora no Grupo CUBOTECH/CNPq, onde se dedica à análise e produção de artigos acadêmicos. Sua contribuição é essencial para o avanço de estudos nas áreas de tecnologia e direito. Atualmente, Joana participa ativamente de uma pesquisa sobre a catástrofe climática que afetou o estado do Rio Grande do Sul em 2024.'
          imagem={Joana}
          link='http://lattes.cnpq.br/6599448396838516' />
        <Integrante2 nome='Laura Rossi Rimolo'
          texto='Aluna de Direito-Les, no 8o semestre da Unisinos/POA. Laura é responsável por realizar pesquisas envolvendo ESG, com destaque para os processos de Parcerias Público Privadas (PPPs), com ênfase na responsabilidade trabalhista e sustentável das empresas.'
          imagem={Laura}
          link='http://lattes.cnpq.br/3212880532214441' />
        <Integrante nome='Luciani Gabrieli Colares Lopes'
          texto='Aluna de Direito no 8º semestre da Unisinos, em Porto Alegre. Com uma trajetória acadêmica marcada pelo compromisso com o Direito e a sustentabilidade, Luciani dedica-se à pesquisa na área de Direito Regulatório e Desenvolvimento Econômico Sustentável. Com uma visão crítica e inovadora, ela busca contribuir para a construção de um futuro mais justo e sustentável por meio do Direito.'
          imagem={Luciani}
          link='http://lattes.cnpq.br/6104038500979127' />
        <Integrante2 nome='Luna Marengo Tesser'
          texto='Luna é atualmente aluna do segundo semestre da faculdade de Direito da Unisinos, seu projeto de pesquisa aborda o impacto da tecnologia jurídica e big data no ambiente jurídico. Além disso, é a responsável pela edição e criação de vídeos e podcasts do grupo CUBOTECH/CNPq.'
          imagem={Luna}
          link='https://lattes.cnpq.br/7206189569552159' />
        <Integrante nome='Otavio Schmidt'
          texto='Otávio é aluno de relações internacionais no segundo semestre na Unisinos, participa como pesquisador no grupo CUBOtech/CNPq onde produz artigos acadêmicos e análises sobre a área do direito, com um foco na junção do direito e tecnologias. Atualmente participa de pesquisas e análises sobre as questões climáticas e a globalização perante as enchentes no Rio Grande do Sul.'
          imagem={Otavio}
          link='https://lattes.cnpq.br/1267608337532579' />
      </Container>
      <Footer />
    </>
  );
}

export default Sobrenos;
