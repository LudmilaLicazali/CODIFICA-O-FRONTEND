import styles from "./Banner.module.css";

function Banner({image}){
    return(
        <div 
            className={styles.banner}
            style={{backgroundImage: `url('/imagens/banner-${image}.png')` }} /* não confundir esse style com o stelys do import, neste com as {} significa que no parametro style você vai colocar {} um codigo js (ou seja style in line injetado com jaascript)*/>
            </div>
    );

}

export default Banner;
