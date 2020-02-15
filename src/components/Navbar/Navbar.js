import React from "react"
import "./style.css"

const Navbar = props => {
    return (
        <nav className="navbar bg-danger navbar-expand-lg sticky-top">
            <h1>Clicky Game</h1>

            <ul className="ml-auto">
                <h4>

            Score: {props.score} | 
            
            Top Score: {props.topScore}
                </h4>
            </ul>
        </nav>
    )
}

export default Navbar;