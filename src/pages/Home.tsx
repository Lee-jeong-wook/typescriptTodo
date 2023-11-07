import { Header } from "../components/layout/Header"
import { Nav } from "../components/layout/Nav"
import { Footer } from "../components/layout/Footer"
import { InputForm } from "../components/home/InputForm"
import { List } from "../components/home/List"
import TodoContext from "../components/home/Reducers"

export const Home = () => {
    return (
        <>
            <Header />
            <Nav></Nav>
            <h1>home page</h1>
            {/* <TodoContext /> */}
            <Footer></Footer>
        </>
    )
}
export default Home