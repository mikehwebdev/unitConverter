import React from "react";
import './css/Result.css'


export default function Result (props){
    
    return (
        <>
            <div className="result">
                <h2>{props.title}</h2>
                <p>{props.conversion}</p>
            </div>
        </>
    )
}