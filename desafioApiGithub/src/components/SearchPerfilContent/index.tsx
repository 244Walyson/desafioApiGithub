import { NavLink } from 'react-router-dom'
import ButtonPrimary from '../ButtonPrimary'
import './styles.css'
import { useState } from 'react'
const SearchPerfilContent = () => {

    const [user, setUser] = useState<string>('')
   
    return (
        <div className="container">
            <div className="search-perfil-content">
                <h1>Encontrar um perfil Github</h1>
                <form onSubmit={()=><NavLink to={`/search/${user}`}></NavLink>}>
                <input type="text" placeholder='Usuario do Github' name='user' onChange={(event)=>(setUser(event.target.value))}/>
                <NavLink to={`/search-perfil/${user}`}><div className="button-search"><ButtonPrimary text='Encontrar'></ButtonPrimary></div></NavLink>
                </form>
                </div>
        </div>
    )
}

export default SearchPerfilContent