import Header from "../../componentes/Header/Header";
import Container from "../../componentes/Container/Container";
import Footer from "../../componentes/Footer/Footer";
import styles from "./Categorias.module.css"

function Categorias (){
    return(
       <>
            <Header />

            <Container>

                <section className={styles.categorias}>

                    {/* <button>Romance</button> */}
                    <Romance />
                    <Drama />
                    <Comedia />
                    <Acao/>
                </section>

                

            </Container>
            
            <Footer />
        </>
     
    );
}
export default Categorias;
