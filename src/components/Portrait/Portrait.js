import React from "react";
import "./style.css"

const Portrait = props => {
    return (
        <div className="card" id={props.id} {...props}>
            <div className="img-container text-center">
                <img alt="hi" src={props.image}/>
            </div>
        </div>
    )
}

export default Portrait;