import Acao from "./Pages/Categorias/Acao/Acao";
import Comedia from "./Pages/Categorias/Comedia/Comedia";
import Drama from "./Pages/Categorias/Drama/Drama";
import Romance from "./Pages/Categorias/Romance/Romance";
import Container from "./componentes/Container/Container";
import AppRoutes from "./routes";



function App (){
  return(
   <>
      <AppRoutes/>
      
      <Container >  
          <section className="CardMenu">
              <Romance />
              <Drama />
              <Comedia />
              <Acao/>
          </section>
      </Container>
   </>
  )
}

export default App;
