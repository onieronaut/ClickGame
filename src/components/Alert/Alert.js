import React from "react";

const Alert = props => {

    if (props.start) {
        return (
            <div className={`alert alert-primary text-center`}>
                <h5>Try to click each fruit only once!</h5>
            </div>
        )
    } else {
        return (
            <div className={`alert alert-${props.type} text-center`}>
                <h5>{props.children}</h5>
            </div>
        );
    }
}

export default Alert;