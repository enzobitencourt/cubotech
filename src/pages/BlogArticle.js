import Footer from "../components/footer"
import { Menu } from "../components/menu"
import Antonia from "../assets/Antonia1.jpg"
import styled from "styled-components"
import { Image } from "@chakra-ui/react";
import Imagem from "../assets/fotoblog1.png"

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


function BlogArticle() {
    return (
        <>
            <Menu />
            <Container>
                <div>
                    <Titulo>A Governança Pública e a Questão Ambiental: Reflexões sobre a Sustentabilidade na Parceria Público-Privada</Titulo>
                    <Lide>Projeto apresentado no 24º Salão de Iniciação Científica da PUCRS sobre a governança pública e sua conexão com a sustentabilidade em parcerias público-privadas, destacando o papel da consulta pública na proteção ambiental e o impacto na infraestrutura nacional.</Lide>
                </div>
                <Autor>
                    <Image
                        src={Antonia}
                        borderRadius="50%"
                        width="50px"
                        height='50px'
                        objectFit='cover'
                        objectPosition='center'
                    />
                    <Container3>
                        <Nome>Maria Antônia Garcia Kellermann</Nome>
                        <Infos>23/08/2024</Infos>
                    </Container3>
                </Autor>
                <Divisao>
                    <Image
                        src={Imagem}
                        borderRadius="5px"
                        width="100%"
                        height='100%'
                        objectFit='cover'
                        objectPosition='center'
                    />
                    <Fonte><b>Fonte:</b> Interna</Fonte>
                </Divisao>
                <Texto>Durante o 24º Salão de Iniciação Científica da PUCRS, tive a oportunidade de apresentar a pesquisa intitulada A Governança Pública e a Questão Ambiental: Uma Perspectiva de Sustentabilidade na Parceria Público-Privada. O estudo reflete sobre como a governança pública pode ser uma ferramenta de promoção da transparência, da prestação de contas e do controle social, visando uma gestão pública mais responsável e focada na proteção ambiental.

                    <br /><br />A pesquisa, que ensejou a participação no Salão Científico da PUCRS, teve como cenário a análise da governança pública instituída pelo Decreto n.º 9.203/17 e pela Lei n.º 13.848/19, que, ao tratarem, ambos, da governança na gestão pública, alinhados, têm em comum a preocupação com a transparência, prestação de contas e controle social. A sinergia entre essas normativas destacou que tanto o decreto quanto a lei se equiparam na missão de fortalecer a governança pública e promover uma gestão mais responsável e transparente, buscando o interesse público e a consecução de resultados efetivos no âmbito governamental. 
                    <br /><br />Desse modo, o estudo centrou-se na análise da aplicabilidade dessas normas como mecanismos reguladores da proteção ambiental no contexto de desenvolvimento da infraestrutura do país, a exemplo dos art. 173 c.c. 225, estabelecidos na Constituição Federal. Logo, o objeto da pesquisa se concentrou na atividade regulatória das agências reguladoras e sua adesão às boas práticas de sustentabilidade em parcerias público-privadas, centrando-se, em específico, na atuação da Agência Nacional de Energia Elétrica (ANEEL) e na sua falha em promover adequadamente a proteção do meio ambiente em um de seus editais mais recentes, o Leilão de Transmissão n.º 02/2023. 
                    <br /><br />A ausência da correta regulação ambiental expôs uma lacuna significativa na governança pública e realçou a necessidade de um maior envolvimento da sociedade e de atores acadêmicos no processo de consulta pública. A partir disso, a hipótese inicial sugeriu que a promoção e realização de consultas públicas, abertas e democráticas, pode fomentar um maior engajamento e envolvimento da sociedade nestes, especialmente aos estudantes de Direito, permitindo-lhes contribuir para a definição de diretrizes protetivas de Direito Ambiental no contexto de editais e contratos públicos. 
                    <br /><br />Logo, o objetivo geral da pesquisa consistiu em fortalecer a consulta pública como instrumento de controle e fiscalização, tendo como objetivos específicos: (1) compreender a atuação regulatória das agências, com o fim de cumprir a Lei n.º 13.848/19 e o Decreto n.º 9.203/17; (2) verificar a ausência de proteção ambiental através da atividade regulatória da ANEEL no Edital do Leilão de Transmissão de n.º 02/2023; e, (3) demonstrar que a participação ativa e qualificada de alunos de direito regulatório do curso de Direito da UNISINOS como atividade de extensão na consulta pública de n.º 008/2023 da ANEEL, consegue contribuir com a construção da proteção ambiental no Edital do Leilão de Transmissão de n.º 02/2023. 
                    <br /><br />Além disso, o método utilizado na pesquisa se fundamentou no raciocínio dedutivo e as técnicas de pesquisa, respaldados pela revisão bibliográfica, nacional e estrangeria, bem como pelo estudo de caso do Edital do Leilão de Transmissão de n.º 02/2023 e da atividade de extensão na consulta pública de n.º 008/2023 da ANEEL. A partir disso, os resultados do estudo apontaram a consulta pública como um mecanismo que fomenta a conformidade com práticas ambientais, as quais acabam por exercerem funções reguladoras, impulsionando uma maior participação da sociedade na tomada de decisões sobre os projetos de infraestrutura para o desenvolvimento do país. 
                    <br /><br />Ademais, os achados da pesquisa também indicaram uma falta de efetividade na governança pública por parte da ANEEL, e tal fato torna-se distante do efetivo cumprimento da Agenda 2030 no que diz respeito à proteção do bem jurídico ambiental, o que acaba por impactar a sustentabilidade do Brasil, gerando implicações significativas. Assim, o trabalho apresentado colocou a consulta pública como um mecanismo de fiscalização e controle essencial para o desenvolvimento sustentável, possuindo potencial de contribuir para a proteção ambiental e promover a Agenda 2030 no Brasil. 
                    <br /><br />Entretanto, os resultados também mostraram que ainda há muito a ser feito no que se refere à governança pública, especialmente por parte da ANEEL, para que as boas práticas ambientais sejam plenamente integradas aos processos de infraestrutura. Além disso, o estudo demonstrou que suas conclusões podem ser aplicadas de maneira benéfica em outros editais futuros.
                    <br /><br />A apresentação no Salão de Iniciação Científica da PUCRS foi extremamente benéfica, pois proporcionou uma oportunidade única de compartilhar a pesquisa com um público diverso e qualificado, com uma banca avaliadora que promoveu grande troca de ideias e insights valiosos. A experiência permitiu não apenas expor os resultados alcançados, mas também de promover ainda mais minha experiência como acadêmica da UNISINOS. Além disso, o evento fortaleceu a confiança na pesquisa realizada, gerando maior visibilidade e impacto para o estudo, além de abrir portas para futuras colaborações e aprimoramentos.
                </Texto>
            </Container>
            <Footer />
        </>
    )
}

export default BlogArticle