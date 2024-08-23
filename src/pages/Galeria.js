import React, { useEffect } from "react";
import Footer from "../components/footer";
import { Menu } from "../components/menu";
import styled from "styled-components";
import Unisinos from "../assets/unisinos.jpeg";

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

const Container2 = styled.div`
    display: flex;
    background: white;
    justify-content: center;
    align-items: center;
    padding: 6vw 4vw 6vw 4vw;

    .elfsight-app-641eff44-4eac-4782-ad71-c350987b4c30 {
        width: 100%; /* Ou ajuste conforme necessário */
        max-width: 1200px; /* Defina um valor máximo se necessário */
        height: auto; /* Ajuste a altura se necessário */
    }
`;


function Galeria() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.setAttribute('data-use-service-core', '');
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Menu />
            <Container>
                <Titulo>Galeria</Titulo>
            </Container>
            <Container2>
                <div className="elfsight-app-641eff44-4eac-4782-ad71-c350987b4c30" data-elfsight-app-lazy></div>
            </Container2>
            <Footer />
        </>
    );
}

export default Galeria;
