import Footer from "../components/footer"
import { Menu } from "../components/menu"
import styled from "styled-components"
import ImageBlog from "../assets/blog.jpg"
import CardB from "../components/cardBlog";
import Daniela from "../assets/Daniela1.jpg"
import Carla from "../assets/Carla1.jpg"
import Enzo from "../assets/Enzo1.jpg"
import Alana from "../assets/Alana1.jpg"

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
    grid-template-columns: repeat(2, 1fr); 
    grid-auto-rows: minmax(30vh, auto); 
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
                <CardB titulo='Normas ABNT e Pesquisa' autor='Daniela Pellin' foto={Daniela} data='15/08/2024'/>
                <CardB titulo='Normas ABNT e Pesquisa' autor='Carla Susin' foto={Carla} data='15/08/2024'/>
                <CardB titulo='Normas ABNT e Pesquisa' autor='Enzo Bitencourt' foto={Enzo} data='15/08/2024'/>
                <CardB titulo='Normas ABNT e Pesquisa' autor='Alana Bortolini' foto={Alana} data='15/08/2024'/>
            </ContainerBlog>
            <Footer />
        </>
    )
}

export default Blog