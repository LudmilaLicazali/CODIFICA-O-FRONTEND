import Header from "../../componentes/Header/Header"
import Container from "../../componentes/Container/Container"
import Footer from "../../componentes/Footer/Footer"
import styles from "./Favorito.module.css"

function Favoritos (){
    return(
        <>
            <Header />

            <Container>
                
                <section className={styles.favoritos}>
                    <h2>Favoritos</h2>
                  
                    {/* Lista de favoritos */}
                    
                </section>
            </Container>

            <Footer />


        </>
    );
}

export default Favoritos;