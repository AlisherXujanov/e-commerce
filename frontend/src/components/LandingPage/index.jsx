import LastestP from "./LatestP"
import FeaturedP from "./FeaturedP"
import { useState, useEffect } from "react"
import "./style.scss"
import Shopex from "./Shopex"

function LandingPage() {
    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState("")

    // When started
    // When continues
    // When destroyed
    // useEffect(callback, dependency)
    // fetch, axios  =>  api communication

    function changeCounter(e) {
        const role = e.target.getAttribute("role")
        if (role == 'inc') {
            setCounter(counter + 1)
            setColor("green")
        } else if (role == 'dec') {
            setCounter(counter - 1)
            setColor("red")
        } else {
            console.log("Invalid role")
        }
    }


    return (
        <main className="landing-wrapper">
            <FeaturedP />
            <LastestP />
            <Shopex/>

            <hr />
            <div className="container">
                <button onClick={changeCounter} role="dec">Decrement</button>
                <span style={{color:color}}>{counter}</span>
                <button onClick={changeCounter} role="inc">Increment</button>
            </div>
        </main>
    );
}

export default LandingPage;