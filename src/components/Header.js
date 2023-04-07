import { Link } from "react-router-dom"
import "../styles/Header.css"

export default function Header() {
    return (
        <header>
            <div className="header-div">
                <h1 className="title"><Link to="/">My React App</Link></h1>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/team">Team</Link></li>
                        <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
                        <li className="nav-item"><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
