import styled from "styled-components"
import { Image } from "@chakra-ui/react"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4vw;
    padding: 0vw 4vw;

    @media (max-width: 768px) {
        align-items: center;
        gap: 2vh;
        padding: 0 4vw;
    }
`;

const ContainerEscrita = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 1vh;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Titulo1 = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: black;
  font-size: 22px;

      @media (max-width: 768px) {
          font-size: 22px;
    }
`;

const Texto = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: #9a9494;
  font-size: 14px;
  width: 90%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Link = styled.button`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 500;
  color: #4D69FB;
  font-size: 14px;
  text-align: start;
  text-decoration: underline;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Integrante(props) {
    return (
        <>
            <Container>
                <Image
                    src={props.imagem}
                    width="35%"
                    objectFit='cover'
                />
                <ContainerEscrita>
                    <Titulo1>{props.nome}</Titulo1>
                    <Link>Acesse o Currículo Lates</Link>
                    <Texto>{props.texto}</Texto>
                </ContainerEscrita>
            </Container>
        </>
    )
}

