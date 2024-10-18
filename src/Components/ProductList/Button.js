import React from "react";

function Button(props){
    return(
        <button onClick={props.clickEventHandler} className="btn btn-primary" disabled={props.disabled}>{props.children}</button>
    )
}

export default Button