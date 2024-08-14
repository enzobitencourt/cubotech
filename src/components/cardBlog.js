import React from 'react';
import { Image } from '@chakra-ui/react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 1.3vw;
  justify-content: center;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out; /* Transição suave para o aumento de tamanho */

  &:hover {
    transform: scale(1.05); /* Aumenta o tamanho do contêiner em 5% */
  }
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2vw;
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Titulo = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #2B2C34;
  font-size: 16px;
`;

const Nome = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 500;
  color: #2B2C34;
  font-size: 12px;
`;

const Infos = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: #2B2C34;
  font-size: 10px;
`;

const Autor = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1vw;
    align-items: center;
`


function CardB() {
    return (
        <>
            <Container>
                <Container2>
                    <Image
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqXmY5lsg3BzXaxb-EyLlwE-flJWWh2DOVA&s'
                        borderRadius="5px"
                        width="100%"
                        height='100%'
                        objectFit='cover'
                    />
                    <Titulo>Normas ABNT e Pesquisa</Titulo>
                    <Autor>
                        <Image
                            src='https://s2-oglobo.glbimg.com/-0dni84YWVLwPxS6-f6_Wqkmy-4=/0x0:850x572/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg'
                            borderRadius="50%"
                            width="50px"
                            height='50px'
                            objectFit='cover'
                        />
                        <Container3>
                            <Nome>Daniela Pellin</Nome>
                            <Infos>10/08/2024</Infos>
                        </Container3>
                    </Autor>
                </Container2>
            </Container>
        </>
    )
}

export default CardB