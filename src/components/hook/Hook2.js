import { useState } from "react"
function Hook2() {
    console.log("render hook 2")
    const [number, setNumber] = useState(0)
    function handle_Number_up() {
        setNumber(number + 10)
    }
    return (
        <div>
            <p>Number: {number}</p>
            <button onClick={handle_Number_up}>Number count up</button>
        </div>
    )
}
export default Hook2;