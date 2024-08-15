import { Creditos, Direita, Esquerda, FooterContainer, Texto, Texto1, Titulo, Titulo1 } from "./styled"
import styled from "styled-components";

const Titulo2 = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  color: #001858;
  font-size: 28px;
`;

const Subtitulo = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  color: #4D69FB;
  font-size: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3vw;
`;

export const Texto2 = styled.button`
    color: #7A757D;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 0;
    text-align: left;
`


function Footer() {
    return (
        <>
            <FooterContainer>
                <Esquerda>
                    <Container>
                        <Titulo2>Cubotech</Titulo2>
                        <Subtitulo>.Blog</Subtitulo>
                    </Container>
                    <Container2>
                        <Texto>Desenvolvido por equipe Cubotech.</Texto>
                        <Titulo>Porto Alegre, 2024</Titulo>
                    </Container2>
                </Esquerda>
                <Direita>
                    <Creditos>
                        <Titulo1>Colaboradores</Titulo1>
                        <Texto1>Unisinos - SL</Texto1>
                        <Texto1>Unisinos - POA</Texto1>
                        <Texto1>Tecnosinos</Texto1>
                    </Creditos>
                    <Creditos>
                        <Titulo1>Siga-nos</Titulo1>
                        <Texto2>Instagram</Texto2>
                        <Texto2>Linkedin</Texto2>
                        <Texto2>Youtube</Texto2>
                        <Texto2>Spotify</Texto2>
                    </Creditos>
                    <Creditos>
                        <Titulo1>Contato</Titulo1>
                        <Texto1>grupocubotech@gmai.com</Texto1>
                        <Texto1>Telefone</Texto1>
                    </Creditos>
                </Direita>
            </FooterContainer>
        </>
    );
}

export default Footer