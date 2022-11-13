import { useRef } from 'react'
import { width } from "./utils"

export default function NewReceiptForm({ addNewReceipt }) {
    const whatRef = useRef()
    const dateRef = useRef()

    const handle = () => {
        addNewReceipt({
            when: dateRef.current.value,
            what: whatRef.current.value,
        })
    }

    const sampleDate = "YYYY-MM-DD";
    return <>
        <input type="text" {...width(sampleDate.length)} ref={dateRef} placeholder={sampleDate} />
        <input type="text" {...width(15)} ref={whatRef} />
        <button onClick={handle}> Create new receipt </button>
    </>
}
