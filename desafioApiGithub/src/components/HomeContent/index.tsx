import { NavLink } from 'react-router-dom'
import './styles.css'
import ButtonPrimary from '../ButtonPrimary'
const HomeContent = () => {
    return (
        <div className="container">
            <div className="home-content">
                <h1>Desafio Github API</h1>
                <p>DevSuperior - Escola de programação</p>
                <div className="button-start"><NavLink to={"/search-perfil"}><ButtonPrimary text="Começar"></ButtonPrimary></NavLink></div>
            </div>
        </div>
    )
}

export default HomeContent