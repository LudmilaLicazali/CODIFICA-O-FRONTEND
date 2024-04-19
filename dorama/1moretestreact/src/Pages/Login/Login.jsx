// import style from "Login.modele.css"
import React from 'react';

import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

const Login = () => {
    return(
        <>
            <Header/>

                <div className='r-container'>
                    <span className='title'>One More Drama</span>
                    <span className='subtitle'>One More Drama</span>

                    <form action="">
                        <input type="email" placeholder='Digite o email'/>
                        <input type="password" placeholder='Digite a senha'/>
                        <button>Acessar</button>
                    </form>
                    <p>Você ainda não tem conta? Registrar</p>
                </div>
          
            <Footer />
        </>
    )
}

export default Login;









// import { useState } from "react";
// import styles from "./Login.module.css";

// function Login() {

//     const [popupStyle, showPopup] = useState("hide")

//     const popup = () => {
//         showPopup("login-popup")
//         setTimeout(() => showPopup("hide"), 3000)
//     }

//    return(
//     <>
//     <div className={styles.login}>

//         <h1>Login</h1>
      
//         <input type="text" placeholder="Usuário" />
//         <input type="password" placeholder="Senha" />
        
//         <button className="login-btn" onClick={popup}>Entrar</button>
        
//     </div>
//     {/* <p className="text">Seu Login </p>
//     <div className="alt-login">
//         <div className="facebook"></div>
//         <div className="google"></div>

//     </div> */}

//     <div className={popupStyle}>
//         <h3>Login realizado com sucesso</h3>
//     </div>
//     </>
//    );
// }

// export default Login;
