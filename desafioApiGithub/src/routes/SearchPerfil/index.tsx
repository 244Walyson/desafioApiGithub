import { Outlet } from 'react-router-dom'
import SearchPerfilContent from '../../components/SearchPerfilContent'
const SearchPerfil = () => {
    return (
        <>
            <SearchPerfilContent></SearchPerfilContent>
            <Outlet></Outlet>
        </>
    )
}

export default SearchPerfil