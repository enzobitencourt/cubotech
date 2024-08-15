import React from 'react';
import { Image } from '@chakra-ui/react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 1.3vw;
  justify-content: center;
  text-align: left;
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


function CardB(props) {
  const navigate = useNavigate()

    return (
        <>
            <Container onClick={() => navigate('/blog/article')}>
                <Container2>
                    <Image
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqXmY5lsg3BzXaxb-EyLlwE-flJWWh2DOVA&s'
                        borderRadius="5px"
                        width="100%"
                        height='100%'
                        objectFit='cover'
                        objectPosition='center'
                    />
                    <Titulo>{props.titulo}</Titulo>
                    <Autor>
                        <Image
                            src={props.foto}
                            borderRadius="50%"
                            width="50px"
                            height='50px'
                            objectFit='cover'
                            objectPosition='center'
                        />
                        <Container3>
                            <Nome>{props.autor}</Nome>
                            <Infos>{props.data}</Infos>
                        </Container3>
                    </Autor>
                </Container2>
            </Container>
        </>
    )
}

export default CardB