import Footer from "../components/footer"
import { Menu } from "../components/menu"
import Daniela from "../assets/Daniela1.jpg"
import styled from "styled-components"
import { Image } from "@chakra-ui/react";

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
  font-size: 45px;

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
                    <Titulo>Normas ABNT e Pesquisa</Titulo>
                    <Lide>A aplicação rigorosa das normas ABNT é fundamental para a credibilidade e padronização das pesquisas acadêmicas no Brasil. Estas normas asseguram a qualidade e a uniformidade dos trabalhos científicos, facilitando a compreensão e a disseminação do conhecimento, além de serem essenciais para a validação e aceitação dos estudos em âmbito nacional e internacional.</Lide>
                </div>
                <Autor>
                    <Image
                        src={Daniela}
                        borderRadius="50%"
                        width="50px"
                        height='50px'
                        objectFit='cover'
                        objectPosition='center'
                    />
                    <Container3>
                        <Nome>Daniela Pellin</Nome>
                        <Infos>20/08/2024</Infos>
                    </Container3>
                </Autor>
                <Divisao>
                    <Image
                        src='https://matriculas.estacio.br/blog/wp-content/uploads/2020/05/29est-biblioteca.jpg'
                        borderRadius="5px"
                        width="100%"
                        height='100%'
                        objectFit='cover'
                        objectPosition='center'
                    />
                    <Fonte><b>Fonte:</b> Faculdade Estácio</Fonte>
                </Divisao>
                <Texto>As normas da Associação Brasileira de Normas Técnicas (ABNT) são fundamentais para a produção científica no Brasil, desempenhando um papel crucial na padronização e na apresentação dos trabalhos acadêmicos. A aplicação dessas normas vai além da estética; ela é essencial para garantir a credibilidade e a uniformidade das pesquisas. Um trabalho acadêmico que segue rigorosamente as diretrizes da ABNT demonstra profissionalismo e cuidado, aspectos que são indispensáveis na academia.

                    <br /><br />Além de conferir seriedade, as normas ABNT facilitam a leitura e a compreensão dos textos científicos. Pesquisadores e estudantes de diferentes áreas, familiarizados com a estrutura padronizada, conseguem entender e analisar os conteúdos de forma mais eficiente. A formatação correta das seções, como introdução, metodologia, resultados e conclusão, é crucial para que o leitor siga o raciocínio do autor de maneira clara e objetiva.
                    <br /><br />Outro ponto importante é a contribuição das normas ABNT para a ética na pesquisa. A formatação adequada de citações e referências impede o plágio, assegurando que as ideias e os dados de outros autores sejam devidamente creditados. Isso não só respeita o trabalho de outros pesquisadores, mas também reforça a integridade do próprio trabalho acadêmico.
                    <br /><br />No contexto das publicações científicas, a aderência às normas ABNT é frequentemente um requisito para a aceitação de artigos em periódicos e conferências. A falta de conformidade com essas normas pode levar à rejeição de um trabalho, independentemente da qualidade de seu conteúdo. Portanto, é vital que os pesquisadores dominem essas regras para garantir que seus estudos sejam bem recebidos e disseminados.
                    <br /><br />Embora sejam essenciais, as normas ABNT podem ser desafiadoras, especialmente para aqueles que estão começando na pesquisa. A complexidade das regras, que envolvem detalhes como margens, espaçamento, e a formatação de tabelas, pode ser difícil de dominar. Felizmente, existem recursos como modelos pré-formatados e tutoriais que podem ajudar na correta aplicação das normas.
                    <br /><br />Em resumo, as normas ABNT são um elemento indispensável na estruturação da pesquisa acadêmica no Brasil. Elas garantem a clareza, a organização e a credibilidade dos trabalhos científicos, tornando-os mais acessíveis e respeitados na comunidade acadêmica. Investir tempo para aprender e aplicar essas normas é essencial para o sucesso na carreira acadêmica e para a contribuição efetiva ao conhecimento científico.
                </Texto>
            </Container>
            <Footer />
        </>
    )
}

export default BlogArticle