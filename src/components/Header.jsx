import React, {useState} from "react";
import Result from "./Result";
import './css/Header.css'

export default function Header(props){

const [input, setInput] = useState(1)

const calculations = {
    metersToFeet: input * 3.28,
    feetToMeters: input *0.30,
    litersToGallons: input * 0.219,
    gallonsToLiters: input * 4.54,
    kilosToPounds: input * 2.2,
    poundsToKilos: input * 0.45
}
    return (
        <>
            <div className="header">
                <h1>{props.title}</h1>

                <input 
                type="text"
                onChange={(e)=>{setInput(e.target.value)}}
                value={input}
                maxLength={3}></input>

            </div>

                <Result 
                title ="Length (Meter/Feet)"
                conversion={` ${input} meters = ${calculations.metersToFeet.toFixed(1)} feet | ${input} feet = ${calculations.feetToMeters.toFixed(1)} meters`}
                />

                <Result
                title ="Volume (Liters/Gallons)"
                conversion={`${input} liters = ${calculations.litersToGallons.toFixed(1)} gallons | ${input} gallons = ${calculations.gallonsToLiters.toFixed(1)} liters`}
                />

                <Result
                title ="Mass (Kilograms/Pounds)"
                conversion={`${input} kilos = ${calculations.kilosToPounds.toFixed(1)} pounds | ${input} pounds = ${calculations.poundsToKilos.toFixed(1)} kilos`}
                />

        </>
    )
}