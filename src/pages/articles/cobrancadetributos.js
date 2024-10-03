import Footer from "../../components/footer"
import { Menu } from "../../components/menu"
import Carla from "../../assets/Carla1.jpg"
import styled from "styled-components"
import { Image } from "@chakra-ui/react";
import Tributos from "../../assets/cobrancatributos.jpeg"

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


function BlogArticle3() {
    return (
        <>
            <Menu />
            <Container>
                <div>
                    <Titulo>A cobrança de tributos em processos de recuperação judicial</Titulo>
                    <Lide>No âmbito da recuperação judicial, a cobrança de tributos por credores privados, como bancos, é estritamente regulada pela Lei nº 11.101/2005, que exclui créditos tributários do processo de recuperação, exigindo que esses débitos sejam pagos diretamente à Fazenda Pública. Essa distinção visa garantir a autonomia dos créditos fiscais e preservar o interesse público, assegurando que a empresa em dificuldades continue a cumprir suas obrigações fiscais enquanto busca sua reestruturação financeira.</Lide>
                </div>
                <Autor>
                    <Image
                        src={Carla}
                        borderRadius="50%"
                        width="50px"
                        height='50px'
                        objectFit='cover'
                        objectPosition='center'
                    />
                    <Container3>
                        <Nome>Carla Susin</Nome>
                        <Infos>03/10/2024</Infos>
                    </Container3>
                </Autor>
                <Divisao>
                    <Image
                        src={Tributos}
                        borderRadius="5px"
                        width="100%"
                        height='100%'
                        objectFit='cover'
                        objectPosition='center'
                    />
                    <Fonte><b>Fonte:</b> Internet</Fonte>
                </Divisao>
                <Texto>No contexto de um processo de recuperação judicial a cobrança de tributos segue regras distintas das obrigações privadas. Quando um banco, por exemplo, atua como credor de uma empresa em recuperação, ele deve observar que não é permitido cobrar tributos junto aos créditos que a empresa lhe deve. Isso ocorre porque os tributos são considerados créditos de natureza pública, regidos por um regime jurídico específico, que não se confunde com os créditos submetidos ao processo de recuperação judicial.

                    <br /><br />A Lei nº 11.101/2005 (Lei de Recuperação Judicial e Falências) trata dessa questão no seu artigo 6º, § 7º, que expressamente exclui os créditos tributários dos efeitos da recuperação judicial. Isso significa que os débitos fiscais da empresa recuperanda devem ser pagos diretamente à Fazenda Pública e não podem ser incluídos no plano de recuperação para negociação ou dilação de prazos, como ocorre com os demais credores.
                    <br /><br />Nesse contexto, o banco, enquanto credor privado, pode apenas incluir no plano de recuperação judicial os créditos de natureza contratual ou outras obrigações financeiras assumidas pela empresa antes do pedido de recuperação judicial. Esses créditos, por sua vez, seguem os termos estabelecidos no plano aprovado em assembleia geral de credores, onde são renegociados, reestruturados ou até mesmo reduzidos, conforme o objetivo de viabilizar a recuperação da empresa.
                    <br /><br />Por outro lado, os créditos tributários são tratados de forma distinta, e a empresa devedora deve buscar soluções junto ao Fisco, como o parcelamento ou negociações específicas, que são reguladas por normas próprias, muitas vezes com prazos e condições diferenciadas para empresas em dificuldades financeiras.
                    <br /><br />Portanto, a atuação dos bancos como credores em processos de recuperação judicial limita-se à cobrança de seus créditos privados, não podendo incluir ou mesclar tributos nessa demanda. Os tributos mantêm sua autonomia e devem ser quitados diretamente junto aos órgãos competentes, respeitando-se a distinção entre créditos públicos e privados que a legislação impõe.
                    <br /><br />Essa separação tem como fundamento preservar o interesse público envolvido na arrecadação de tributos, garantindo que a empresa, mesmo em processo de recuperação, continue a cumprir suas obrigações fiscais, de forma a contribuir para a manutenção do erário e, consequentemente, dos serviços públicos essenciais.
                    <br /><br />Assim, no processo de recuperação judicial, o banco credor deve atentar-se para essas especificidades e conduzir suas ações em conformidade com as normas que regem os créditos de natureza privada, respeitando a legislação vigente sobre a cobrança de tributos.
                </Texto>
            </Container>
            <Footer />
        </>
    )
}

export default BlogArticle3