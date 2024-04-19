 import {Link} from "react-router-dom";
 import styles from "./Header.module.css";

function Header(){
    return (
     
       <header className={styles.header}>
            
            <img src="public/imagens/logo1morevermelha.jpg" alt="logo1more"></img>

           <Link to= "/">
                <span>One More Drama</span> 
            </Link>
            
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/Categorias">Categorias</Link>

                     {/* // desativar e refazer dropdown
                     <li className="dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                        </a>
                        
                        
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="romance-tab">Romance</a></li>
                            <li><a className="dropdown-item" href="#">Drama</a></li>
                            <li><a className="dropdown-item" href="#">Comédia</a></li>
                            <li><a className="dropdown-item" href="#">Ação</a></li>
                        </ul>
                
                
                            //<a href="#">Categoria</a> //
                    </li>*/}
                    <Link to="/Favoritos">Favoritos</Link>
                    <Link to="/Lancamentos">Lançamentos</Link>
                    {/* <Link to="/Sobrenos">Sobre Nós</Link> */}
                    <Link to="/Login">Login</Link>
                    
                    
            </nav>

            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Qual dorama assistir?" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form> */}

        </header>

     
      
    );
}

export default Header;
