import Footer from "../components/footer"
import { Menu } from "../components/menu"
import styled from "styled-components"
import Unisinos from "../assets/unisinos.jpeg"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4vw;
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

function Galeria() {
    return (
        <>
            <Menu />
            <Container>
                <Titulo>Galeria</Titulo>
            </Container>
            <Footer />
        </>
    )
}

export default Galeria