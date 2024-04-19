import  styles from "./Drama.module.css"

function Drama (){
    return (
       
            <section className={styles.drama}>
                
                <div>
                    <a href="http://www.netflix.com.br/title/81488912" rel="noreferrer noopener" target="_blanck">
                    <img src="/imagens/drama1.webp" alt="..." />
                    </a>
                    <h5>Tudo Bem Não Ser Normal</h5>
                    <p>O encontro entre uma escritora de livros infantis e um cuidador de doentes mentais dá início a uma jornada de superação dos problemas emocionais que ambos enfrentam.</p>
                </div>

                <div>
                    <a href="http://www.netflix.com.br/title/81488912" rel="noreferrer noopener" target="_blanck">
                    <img src="/imagens/drama2.jpg" alt="..."/>
                    </a>
                    <h5>A Caminho do Céu</h5>
                    <p>Geu Roo é um jovem autista que trabalha para o negócio de seu pai, o "Move To Heaven". Seu trabalho é organizar os itens deixados por pessoas falecidas. Um dia, o seu pai morre e ele é deixado sozinho, mas seu tio Sang Goo aparece de repente na sua frente. Sang Goo é um homem frio. Ele era um artista marcial que lutava em lutas clandestinas, até ser preso por causa do que aconteceu em uma dessas lutas. Sang Goo agora se torna o guardião de Geu Roo, e juntos, eles dirigem o "Move To Heaven".</p>
                </div>

                <div>
                    <a href="http://www.netflix.com.br/title/81488912" rel="noreferrer noopener" target="_blanck">
                    <img src="/imagens/drama3.webp" alt="..."/>
                    </a>
                    <h5>Uma Segunda Chance</h5>
                    <p>A história de uma mãe que morreu e tem a chance de reencarnar durante 49 dias, e de um marido que se vê nessa situação sendo que acabou de começar a viver uma nova vida após superar a dor de perder a esposa.…</p>
                </div>
                
            </section>
      
    );
}

export default Drama;
