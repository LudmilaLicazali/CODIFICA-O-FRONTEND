import { Link } from "react-router-dom"


function About(){
    return(
       <div>
        <h1>Sobre Nós</h1>
        <ul>
            {/* <li><a href="./History">Nossa História</a></li> */}
            <li><Link to ='./History'>Nossa História</Link></li>
        </ul>
        </div>
    )
}

export default About