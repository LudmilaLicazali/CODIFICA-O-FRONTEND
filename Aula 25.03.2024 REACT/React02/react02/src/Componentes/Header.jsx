import styles from './Header.module.css'


export function Header(props){
    // console.log(props)
    return(

        //outra maneira de fazer esse codigo é ao inves de adicionar o h1 seria tirar o className={styles.header} do strong e colocar na tag header(pai) e lá no (Header.module.css) faça as estilizações todas somente na classe .header
        <header>
        <h1 className={styles.h1}>Introdução React</h1>
        <strong className={styles.header}>Teste React</strong>
        <p>{props.nomeCliente}</p>
        <p>{props.cidadeCliente}</p>
        <p>{props.ufCliente}</p>
        </header>
    )
}

