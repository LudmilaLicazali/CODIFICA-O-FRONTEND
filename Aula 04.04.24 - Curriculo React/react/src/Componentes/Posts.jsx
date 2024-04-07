import styles from '../Componentes/Posts.module.css';
import Comments from '../Componentes/Comments'

function Posts (){
    return(
       
       <article className={styles.posts}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="" />

                    <div className={styles.authorInfo}>
                    <strong>Técnico de Projetos</strong>
                    <span>Web Developer</span>
                    </div>
                </div>

                <time title='01/04/2024' dateTime='01/04/2024' >Publicado há 1 hora</time>
            </header>

           <div className={styles.content}>
                <p>Fala Galera! </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta aliquam repudiandae provident quas deleniti.</p>

                <p><a href=''>Web.desing/projeto</a></p>

                <p><a href=''>#novoprojeto</a></p>
            
            </div>

            <form className={styles.commentesForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário' />   
                {/* texte aréa assim fechada em si mesma utiliza aplana o placeholder dela */}

                <div>
                    <button type='submit'>Comentar</button>
                </div>

            </form>

            <div className={styles.commentesList}>
                <Comments />
                <Comments />
                <Comments />
                <Comments />
            </div>

        </article>

        
    )
}

export default Posts;