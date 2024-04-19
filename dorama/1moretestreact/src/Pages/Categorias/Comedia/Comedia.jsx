import  styles from "./Comedia.module.css"

function Comedia (){
    return (
       
            <section className={styles.comedia}>
                
                <div>
                    <a href="http://www.netflix.com.br/title/81488912" rel="noreferrer noopener" target="_blanck">
                    <img src="/imagens/comedia1.jpg" alt="..." />
                    </a>
                    <h5>Mulher Forte, Do Bong Soon</h5>
                    <p>Ela não é uma mulher comum. Do Bong Soon é uma mulher que possui força hercúlea. Ela pode esmagar objetos com as mãos nuas quando os segura com muita força. Embora Bong Soon queira ser uma mulher delicada e…</p>
                </div>

                <div>
                    <a href="http://www.netflix.com.br/title/81488912" rel="noreferrer noopener" target="_blanck">
                    <img src="/imagens/comedia2.jpg" alt="..."/>
                    </a>
                    <h5>Irmãs Revolucionárias</h5>
                    <p>Uma mãe de família é assassinado no meio do processo de divórcio, após quarenta anos de casamento. As filhas e todos da família são considerados suspeitos e uma cadeia de acontecimentos faz com que a vida de cada um mude completamente...</p>
                </div>

                <div>
                    <a href="http://www.netflix.com.br/title/81488912" rel="noreferrer noopener" target="_blanck">
                    <img src="/imagens/comedia3.jpg" alt="..."/>
                    </a>
                    <h5>Hello, Me!</h5>
                    <p>Miserável e malsucedida, Ban Ha Ni, uma mulher solteira de 37 anos que geralmente é servil e tímida, acha que perdeu todo o seu brilho. Ocupando apenas um cargo temporário em seu trabalho, ela tem medo de ser demitida…</p>
                </div>
                
            </section>
      
    );
}

export default Comedia;
