
import {Routes, Route} from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Home from '../Componentes/Home';
import Missao from '../Componentes/Missao';
import Historia from '../Componentes/Historia';
import Produtos from '../Componentes/Produtos';
import Contato from '../Componentes/Contato';

import './styles.global.css'; 


function App (){
    return(
          <div>
          <Menu/>

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Missao' element={<Missao/>} />  
            <Route path='/Produtos' element={<Produtos/>} /> 
            <Route path='/Historia' element={<Historia/>} /> 
            <Route path='/Contato' element={<Contato/>} /> 
          </Routes>

          <Footer/>
          
          </div>

    )
}

export default App