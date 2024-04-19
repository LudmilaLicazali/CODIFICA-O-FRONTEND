import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Banner from "../../componentes/Banner/Banner";
import Container from "../../componentes/Container/Container";
import Card from "../../componentes/Card/Card";
import MenuBtn from '../../componentes/MenuBtn/MenuBtn';


function Inicio (){
  return(
    <>
    <Header />
    <Banner image="cacadores" />
    <Container>
      <h2>Continue Assitindo:</h2>
      <section className="cards">{/* essa classe CARDS foi declarada no css global do projeto  que é o Index.css */}
        <Card />
      </section>

      <h1>Procurando algo novo? </h1>
      <h3>Dê uma olhada em nossas categorias:</h3>
      <MenuBtn />
      
    </Container>
    <Footer />
    </>
  )
}

export default Inicio;
