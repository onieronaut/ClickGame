import React from "react"
import "./style.css"

const Navbar = props => {
    return (
        <nav className="navbar bg-danger navbar-expand-lg sticky-top">
            Clicky Game

            <ul className="ml-auto">
            Score: {props.score} | 
            
            Top Score: {props.topScore}
            </ul>
        </nav>
    )
}

export default Navbar;