import Reactlogo from '../assets/logo-react.png';
import styles from '../Componentes/Header.module.css';


function Header (){
    return(
        <header className={styles.header}>
            <img src={Reactlogo} alt="Logo React" />
            <strong>RPV React Posts</strong>
        </header>
    )
}

export default Header;
