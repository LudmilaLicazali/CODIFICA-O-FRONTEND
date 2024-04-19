import {BrowserRouter, Routes, Route} from "react-router-dom";
import Inicio from "./Pages/Inicio/Inicio";
import Favoritos from "./Pages/Favoritos/Favorito";
import Categorias from "./Pages/Categorias/Categorias";
import Login from "./Pages/Login/Login";
import Romance from "./Pages/Categorias/Romance/Romance";
import Acao from "./Pages/Categorias/Acao/Acao";
import Drama from "./Pages/Categorias/Drama/Drama";
import Comedia from "./Pages/Categorias/Comedia/Comedia";



function AppRoutes (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Inicio/> } ></Route>
                {/* <Route path="/Categorias" element={ <Categorias /> } ></Route> */}
                    <Route path="/Categorias/Romance" element={ <Romance /> } ></Route>
                    <Route path="/Categorias/Acao" element={ <Acao /> } ></Route>
                    <Route path="/Categorias/Drama" element={ <Drama/> } ></Route>
                    <Route path="/Categorias/Comedia" element={ <Comedia /> } ></Route>
                    <Route path="/Favoritos" element={ <Favoritos/> } ></Route>
                 {/*<Route path="Login" element={<Login />} ></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
