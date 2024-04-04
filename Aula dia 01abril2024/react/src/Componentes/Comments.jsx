import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comments.module.css'



function Comments (){
    return(
            <div className={styles.comments} >
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="" />

                <div className={styles.commentsBox}>
                    <div className={styles.commentsContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Developer 1</strong>
                                <time title='02/04/2024' dateTime='2024-04-02'>Publicado há 30 minutos</time>
                               
                            </div>

                            <div>
                                <button title='Exclir comentário'>
                                    <Trash />  {/*icone de lixeira para excluir comentário*/}
                                </button>
                            </div>

                        </header>

                        <p>Curso top, valeu de mais !!</p>

                    </div>

                    <footer>
                        <button>
                            <ThumbsUp /> Gostei/Aplaudir <span>20</span>
                              {/*icone de lixeira para excluir comentário*/}
                        </button>
                    </footer>

                </div>

            </div>
    )
}
export default Comments;
