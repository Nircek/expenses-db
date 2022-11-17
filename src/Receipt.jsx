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
        if (!what) {
            setError("Item name must not be empty.")
            return
        }
        if (!(Math.abs(amount) < 100000)) amount = 0.0
        if (!(Math.abs(price) < 100000)) price = 0.0
        setList((x) => [...x, { what, amount, price }])
    }
    const resetError = () => setError("")
    const handleDelete = (it) => () => setList((list) => list.filter((_, i) => i != it));
    const handleKeyDown = (fun) => (e) => { if (e.key === 'Enter') fun(e) }
    const changeFocusHandler = (e) => { e.preventDefault(); e.target.nextSibling.focus() }

    return <div className="Receipt">
        <label> Receipt #{id} ({date} in {where}) </label>
        <ol>
            {list.map((x, i) => <li key={i}>{x.what} x{x.amount} for {x.price.toFixed(2)} <button onClick={handleDelete(i)}>delete</button></li>)}
        </ol>
        <input type="text" onKeyDown={handleKeyDown(changeFocusHandler)} onChange={resetError} ref={whatRef} placeholder="Item" {...width(20)} />
        <input type="text" onKeyDown={handleKeyDown(changeFocusHandler)} onChange={resetError} ref={amountRef} placeholder="1" {...width(3)} />
        <input type="text" onKeyDown={handleKeyDown(changeFocusHandler)} onChange={resetError} ref={priceRef} placeholder="0.00" {...width(6)} />
        <button onClick={add}>add</button><br />
        {error && <span className="error">{error}</span>}
    </div>
}
