import { styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4vw;
  background-color: #EFF0F3;
  height: 50vh;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Muda a direção para coluna em telas menores */
    padding: 8vw 4vw;
    align-items: start;
    justify-content: space-between;
    height: 50vh;
  }
`;

export const Esquerda = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

export const Direita = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2vw;

  @media (max-width: 768px) {
    display: grid; 
    grid-template-columns: repeat(2, 1fr); /* Cria um grid com 2 colunas */
    gap: 8vw; /* Espaçamento entre os itens do grid */
    margin-top: 2vw; /* Adiciona margem superior para separar as seções */
  }
`;


export const Texto = styled.p`
    color: #7A757D;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Texto1 = styled.p`
    color: #7A757D;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 0;
`

export const Titulo = styled.p`
    color: #7A757D;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const Titulo1 = styled.p`
    color: black;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const Creditos = styled.div`
display: flex;
flex-direction: column;
gap: 0.5vw;
`;