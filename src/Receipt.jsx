import { useState, useRef } from 'react'
import { width, floatify } from "./utils"

export default function Receipt({ id, date, where, list, setList }) {
    const whatRef = useRef()
    const amountRef = useRef()
    const priceRef = useRef()
    const [error, setError] = useState("");

    const add = () => {
        const what = whatRef.current.value
        let amount = floatify(amountRef.current.value)
        let price = floatify(priceRef.current.value)
        if (!what) setError("Item name must not be empty.")
        else if (!(Math.abs(amount) < 100000)) setError("Amount is not valid.")
        else if (!(Math.abs(price) < 100000)) setError("Price is not valid.")
        else setList((x) => [...x, { what, amount, price }])
    }
    const resetError = () => setError("")

    return <div className="Receipt">
        <label> Receipt #{id} ({date} in {where}) </label>
        <ol>
            {list.map((x, i) => <li key={i}>{x.what} x{x.amount} for {x.price.toFixed(2)}</li>)}
        </ol>
        <input type="text" onChange={resetError} ref={whatRef} placeholder="Apple" {...width(20)} />
        <input type="text" onChange={resetError} ref={amountRef} placeholder="3" {...width(3)} />
        <input type="text" onChange={resetError} ref={priceRef} placeholder="3.00" {...width(6)} />
        <button onClick={add}>add</button><br />
        {error && <span className="error">{error}</span>}
    </div>
}
