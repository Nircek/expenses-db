import { useState } from 'react'
import './App.css'

function App() {
  const text = "Hello world!";
  const [count, setCount] = useState(text.length);
  return <p onClick={() => setCount(x => Math.max(x - 1, 0))}>
    {text.substring(0, count)}
  </p>
}

export default App
