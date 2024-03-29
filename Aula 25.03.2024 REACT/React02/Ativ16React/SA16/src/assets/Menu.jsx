import {Link} from 'react-router-dom'

function Menu() {
    return(
        <div>
        <ul>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/Missao'>Missão</Link></li>
        <li><Link to ='/Produtos'>Produtos</Link></li>
        <li><Link to ='/Historia'>Nossa História</Link></li>
        <li><Link to ='/Contatos'>Contatos</Link></li>
        </ul>
    </div>
    )
}

export default Menu
