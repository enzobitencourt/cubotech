import Footer from "../components/footer"
import { Menu } from "../components/menu"
import styled from "styled-components"
import ImageBlog from "../assets/blog.jpg"
import CardB from "../components/cardBlog";
import Antonia from "../assets/Antonia1.jpg"
import Alana from "../assets/Alana1.jpg"
import Imagem from "../assets/fotoblog1.png"
import Direitos from "../assets/direitoshumanos.jpg"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4vw;
    justify-content: center;
    background-image: url(${ImageBlog});
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
`;

const Titulo = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: white;
  font-size: 40px;
  text-align: center;
  padding: 4vw 0;
  text-decoration: underline;

            @media (max-width: 768px) {
     font-size: 30px;
  }
`;

const ContainerBlog = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-rows: minmax(60vh, auto); 
  gap: 60px;
  align-items: center;
  padding: 6vw 4vw 6vw 4vw;
  background: white;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(20vh, 1fr)); 
    grid-auto-rows: minmax(40vh, auto); 
    padding: 10vw 4vw;
    gap: 30px;
  }
`;

function Blog() {
    return (
        <>
            <Menu />
            <Container>
                <Titulo>Blog</Titulo>
            </Container>
            <ContainerBlog>
                <CardB path='/blog/article1' titulo='A Governança Pública e a Questão Ambiental: Reflexões sobre a Sustentabilidade na Parceria Público-Privada' autor='Maria Antônia Garcia Kellermann' imagem={Imagem} foto={Antonia} data='23/08/2024'/>
                <CardB path='/blog/article2' titulo='Documentos de concepção dos direitos humanos ao longo da história' autor='Alana Bortolini' imagem={Direitos} foto={Alana} data='29/08/2024'/>
            </ContainerBlog>
            <Footer />
        </>
    )
}

export default Blog