import styles from './Card.module.css';


function Card(){
    return(
   
        <section className={styles.card}>
                <a
                    href="http://www.netflix.com.br/title/81488912"
                    rel="noreferrer noopener" 
                    target="_blanck">
                    <img src="./public/imagens/cartazdemon.jpg"alt="Cartaz"/>
                    <img src="./public/imagens/cartazlua.jpg" alt="Capa do video" />
                    <img src="./public/imagens/cartazsnowdrop.jpg" alt="Capa do video" />
                    <img src="./public/imagens/cartazepoca.webp" alt="Capa do video" />
                </a> 
{/* 
                <figure>
                    
                </figure> */}
        </section>
        
    );
    
}

export default Card;
