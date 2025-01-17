
import './Style.global.css'
import Header from "./Componentes/Header";
import Sidebar from './Componentes/Sidebar';
import Posts from './Componentes/Posts';
import styles from './Componentes/App.module.css';


function App() {
 

  return (
    <>

      <div>
        <Header />

          <div className={styles.wrapper}>
          <Sidebar />
          
            <main>
              <Posts />
              <Posts />
              
            </main>
            
          </div>
      </div>
     
    </>
  )
}

export default App
