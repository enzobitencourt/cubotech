import { styled } from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    padding: 8vw 4vw;
    vertical-align: center;
` 

export const Esquerda = styled.div`
    width: 22vw;
    gap: 1.5vw;
    display: flex;
    flex-direction: column;
`

export const Direita = styled.div`
    width: 73vw;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: end;
`

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
    align-content: space-between;
    width: auto;
    height: 20vh;
    margin-right: 3vw;
`