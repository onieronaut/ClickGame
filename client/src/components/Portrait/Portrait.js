import React from "react";
import "./style.css"

const Portrait = props => {
    return (
        <div className="card">
            <div className="img-container">
                <img alt="hi" src={props.image}/>
            </div>
        </div>
    )
}

export default Portrait;