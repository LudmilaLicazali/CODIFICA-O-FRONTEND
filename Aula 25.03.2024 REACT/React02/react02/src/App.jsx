
// exemplo do import pelo name export
// import {Pagina2} from './Pagina2'

import { Header } from './Componentes/Header';
import Pagina2 from './Pagina2';
import Pagina3 from './Pagina3'; 
import Footer from './Componentes/Footer';
import './styles.global.css';  //importação global do nosso arquivo css, ou seja tudo dentro da função App vai herdar os paramentros desse css


import Home from './Home'; //teve o nome alterado para Home
import About from './About'; // teve nome alterado para About
import {Routes, Route} from 'react-router-dom';


// a função é a mesma coisa que componente, que precisa ser exportado vide ultima linha do codigo, para depois ser imortado em outro componente por exemplo main.jsx ou qualquer outro para que este herde as propriedades.

//se quiser fazer a exportação pelo name export  ao enves de usar o export da ultima linha você escreve a palavra export antes da function e na hora de importar coloque o nome dele entre chaves. exemplo --> export function Pagina2(){div etcccc} --> import {Pagina2} from 'caminho do arquivo'

function App() {

  return (

      <div> 
        <header>
          <h1>Meu Site</h1>
        </header>
        <hr />
        <hr />
      
      {/* Os routes fazem  a troca de paginas no endereço do site exemplo: wwww.abcd(/) -- vai para pagina Home
      wwww.abcd(/Sobre) -- vai para pagina Sobre e assim por diante */}
        <div> 
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sobre' element={<About/>} />  
          </Routes>

        </div>

        <hr />
        <hr />
    
      <footer>
        <h5>Contato</h5>
      </footer>
      </div>



// a ordem que você colocar dentro da div é a ordem que vai aparece na renderização teste torcar os elentos de posição para ver o que acontece
    // <div>
    //   <Header 
    //   nomeCliente='Ludmila'
    //   cidadeCliente='Cataguases'
    //   ufCliente='MG'
    //   />  {/* um exemplo de uso de PROPS é visto no header acima com nomeCliente/cidadeCliente/ufCliente ele será chamado com o nome de PROPS mesmo lá na function header.jsx ficará assim Header(props){}*/}
    //   <Pagina2/>
    //   <Pagina3/>
    //   <Footer/>

    //   </div>
  )
}

export default App