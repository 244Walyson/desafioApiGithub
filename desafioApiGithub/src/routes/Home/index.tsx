import { Outlet } from "react-router-dom"
import Header from "../../components/Header"

const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
}

export default Home