import { useRef, useEffect } from 'react'
import { width } from "./utils"

export default function NewReceiptForm({ addNewReceipt }) {
    const whereRef = useRef()
    const dateRef = useRef()

    useEffect(() => {
        dateRef.current.value = new Date().toISOString().substring(0, 10)
        whereRef.current.value = "Lewiatan"
    }, [])

    const handle = () => {
        addNewReceipt({
            date: dateRef.current.value,
            where: whereRef.current.value,
        })
        whereRef.current.value = "Carrefour,Biedronka,Zabka".split(',')[Math.floor(Math.random() * 3)]
    }

    const sampleDate = "YYYY-MM-DD";
    return <>
        <input type="text" {...width(sampleDate.length)} ref={dateRef} placeholder={sampleDate} />
        <input type="text" {...width(15)} ref={whereRef} placeholder="Store" />
        <button onClick={handle}> Create new receipt </button>
    </>
}
