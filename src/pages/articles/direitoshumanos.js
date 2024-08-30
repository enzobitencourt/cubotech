import Footer from "../../components/footer"
import { Menu } from "../../components/menu"
import Alana from "../../assets/Alana1.jpg"
import styled from "styled-components"
import { Image } from "@chakra-ui/react";
import Direitos from "../../assets/direitoshumanos.jpg"

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
  font-size: 30px;
  margin-bottom: 1vw;


    @media (max-width: 768px) {
          font-size: 40px;
          line-height: 120%;
          margin-bottom: 3vw;
  }
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 10vh 25%;
    gap: 2vw;

    @media (max-width: 768px) {
        padding: 6vh 10%;
        gap: 6vw;
  }
`

const Lide = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: #9a9494;
  font-size: 14px;
  
`;

const Fonte = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: black;
  font-size: 12px;
  
`;

const Texto = styled.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: black;
  font-weight: 300;
  font-size: 16px;

`;

const Divisao = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1vw;
`


function BlogArticle2() {
    return (
        <>
            <Menu />
            <Container>
                <div>
                    <Titulo>Documentos de concepção dos direitos humanos ao longo da história</Titulo>
                    <Lide>Conhecer o desenvolvimento histórico dos direitos humanos é crucial para entender os avanços e desafios enfrentados na luta pela dignidade e igualdade global. A compreensão dessa trajetória revela como as conquistas do passado moldaram os direitos atuais e destaca a importância de continuar defendendo e expandindo essas liberdades para garantir um futuro mais justo e equitativo.</Lide>
                </div>
                <Autor>
                    <Image
                        src={Alana}
                        borderRadius="50%"
                        width="50px"
                        height='50px'
                        objectFit='cover'
                        objectPosition='center'
                    />
                    <Container3>
                        <Nome>Alana Bortolini</Nome>
                        <Infos>29/08/2024</Infos>
                    </Container3>
                </Autor>
                <Divisao>
                    <Image
                        src={Direitos}
                        borderRadius="5px"
                        width="100%"
                        height='100%'
                        objectFit='cover'
                        objectPosition='center'
                    />
                    <Fonte><b>Fonte:</b> Interna</Fonte>
                </Divisao>
                <Texto>Depreende-se que os conceitos que abrangem os Direitos Humanos desenvolvem-se de maneiras distintas sob o viés da história. Compreender a sua evolução é útil para interpretar a sua efetividade atual, bem como o motivo pelo qual os seus conceitos diferem-se, hoje, nas distintas sociedades do mundo.

                    <br /><br />Primordialmente, muitos estudiosos concebem o ano 539 a.c como o precursor dos Direitos Humanos, sendo Ciro II -  rei da antiga sociedade Persa - o responsável por redigir o que foi considerado o primeiro decreto de tais direitos da história. Gravados com escrita cuneiforme e em língua acádica dentro de um cilindro de argila, princípios análogos ao que hoje referem-se aos quatro primeiros artigos da Declaração Universal dos Direitos Humanos foram encontrados no Iraque, em 1870. À vista disso, após a concepção do cilindro de Ciro, ideias introdutórias difundiram-se para a Índia, Grécia e principalmente para Roma, onde originaram conceitos inerentes aos Direitos Humanos - como a “lei natural”, com a noção de que as pessoas tendiam a seguir certas leis não escritas no curso de suas vidas - fator que posteriormente, resultou no Direito Romano. No entanto, o Museu Britânico, juntamente com demais estudiosos, rejeita a interpretação de que tal artefato representa a primeira escritura dos direitos humanos, considerando a ideia equivocada principalmente por concentrar-se em um contexto geopolítico específico, não estabelecendo direitos universais aplicáveis a todos os seres humanos, mas sim, privilégios concedidos a grupos específicos sob o governo da época. 
                    <br /><br />Sob outra perspectiva, a Carta Magna, assinada no ano de 1215, corroborou para o fortalecimento conceitual dos direitos humanos ao mesmo tempo que tornou-se um marco na luta pelo estabelecimento de liberdade na Inglaterra feudal. Esse importante documento foi o primeiro a se opor ao poder do rei, sujeitando-o à lei vigente, além de impor restrições legislativas importantes que tornaram-se fundamentais para os conceitos presentes na democracia moderna. Por conseguinte, as ideias contidas na Carta Magna influenciaram documentos de suma importância para os direitos atuais, como a Declaração de Independência dos Estados Unidos e a Declaração Universal dos Direitos Humanos, tornando-se um símbolo de justiça e igualdade e sendo considerada, por muitos, essencial para a proteção dos direitos humanos e para a construção de sociedades justas e equitativas.
                    <br /><br />Outros relevantes instrumentos são a Declaração de Independência dos Estados Unidos (1776) e a Constituição dos Estados Unidos da América (1789), que impactam na formação e no desenvolvimento do conceito de direitos humanos ao afirmar princípios que posteriormente foram de suma importância para a consolidação do termo. Ao abordar - muito tempo depois - que: “A própria linguagem da Declaração da Independência americana e da Déclaration des Droits de l’Homme — “inalienáveis”, “recebidos por nascimento”, “verdades evidentes por si mesmas” — implica a crença em certa “natureza” humana que seria sujeita às mesmas leis de evolução que a do indivíduo (...)” (ARENDT, 2009, p. 259) a filósofa Hannah Arendt enfatiza a importância desses documentos, mostrando que eles designaram influências profundas acerca da teoria e da prática dos direitos humanos, moldando, consequentemente, a definição e a compreensão moderna dos fenômenos que hoje chamamos de Direitos Humanos. 
                </Texto>
            </Container>
            <Footer />
        </>
    )
}

export default BlogArticle2