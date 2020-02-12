import React from "react";

const Alert = props => {

    if (props.start) {
        return (
            <div className={`alert alert-primary text-center`}>
                Try to click each character only once!
            </div>
        )
    } else {
        return (
            <div className={`alert alert-${props.type} text-center`}>
                {props.children}
            </div>
        );
    }
}

export default Alert;