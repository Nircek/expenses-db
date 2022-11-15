import { useEffect, useState } from "react"

export const width = (ch) => ({ style: { width: ch + 'ch' } })
export const floatify = (x) => +x == parseFloat(x) ? +x : NaN;

const LS_PREFIX = "io.github.nircek.expenses-db."
export function useLocalStorage(key, initialValue = null) {
    key = LS_PREFIX + key
    const [value, setValue] = useState(() => {
        const json = localStorage.getItem(key)
        if (json !== null) return JSON.parse(json)
        if (typeof initialValue === "function") initialValue = initialValue()
        return initialValue
    })
    useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value])
    return [value, setValue]
}
