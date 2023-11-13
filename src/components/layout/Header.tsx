import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <h1>this is header</h1>
            <Link to ="/">메인</Link>
            <Link to ="/item">아이템</Link>
        </header> 
    )
}