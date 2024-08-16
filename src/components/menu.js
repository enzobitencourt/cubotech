import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Menu as ChakraMenu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useMediaQuery } from '@chakra-ui/react';

const Nav = styled.nav`
  background-color: #FFFFFF;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1vw 4vw;
  
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Li = styled.li`
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Plus Jakarta Sans", sans-serif;
`;


const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: block;
`;

const Titulo = styled.p`
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

const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: end;
  font-align: left;
`;

export function Menu() {
  const navigate = useNavigate();

  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Nav>
      <Container onClick={() => navigate('/')}>
        <Titulo>Cubotech</Titulo>
        <Subtitulo>.Blog</Subtitulo>
      </Container>
      {isMobile ? (
        <ChakraMenu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList color='black' zIndex='999'>
            <MenuItem onClick={() => navigate('/')}>
              Home
            </MenuItem>
            <MenuItem onClick={() => navigate('/sobrenos')}>
              Sobre nós
            </MenuItem>
            <MenuItem onClick={() => navigate('/blog')}>
              Blog
            </MenuItem>
            <MenuItem onClick={() => navigate('/galeria')}>
              Galeria
            </MenuItem>
          </MenuList>
        </ChakraMenu>
      ) : (
        <Ul>
          <Li onClick={() => navigate('/')}>
            <StyledLink>Home</StyledLink>
          </Li>
          <Li onClick={() => navigate('/sobrenos')}>
            <StyledLink>Sobre nós</StyledLink>
          </Li>
          <Li onClick={() => navigate('/blog')}>
            <StyledLink>Blog</StyledLink>
          </Li>
          <Li onClick={() => navigate('/galeria')}>
            <StyledLink>Galeria</StyledLink>
          </Li>
        </Ul>
      )}
    </Nav>
  );
}
