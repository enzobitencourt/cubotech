import React from 'react';
import { Image } from '@chakra-ui/react';
import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  background-color: white;
  border-radius: 10px;
  padding: 1vw 2vw;
  transition: background-color 0.3s, color 0.3s; /* Transição suave */

  &:hover {
    background-color: #4D69FB;
    color: white; /* Aplica a cor do texto ao Container */
  }
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2vw;
`;

const Titulo = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  color: #2B2C34;
  font-size: 16px;
  transition: color 0.3s; /* Transição suave para a cor do texto */
  
  ${Container}:hover & {
    color: white; /* Muda a cor do texto no hover do Container */
  }
`;

function CardComponent(props) {
  const handleClick = () => {
    window.open(props.link, '_blank');
};

  return (
    <Container onClick={handleClick}>
      <Container2>
        <Image
          src={props.imagem}
          borderRadius="10px"
          width="30%"
        />
        <Titulo>{props.titulo}</Titulo>
      </Container2>
    </Container>
  );
}

export default CardComponent;
