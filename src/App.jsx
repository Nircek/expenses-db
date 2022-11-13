import { useState } from 'react'
import './App.css'
import NewReceiptForm from './NewReceiptForm';
import Receipt from './Receipt';

export default function App() {
  const [receipts, setReceipts] = useState([]);

  const addNewReceipt = (details) => {
    setReceipts(r => [...r, {
      id: Math.max(...r.map(x => x.id), 0) + 1,
      ...details
    }])
  }

  return <>
    {receipts.map(x => <Receipt key={x.id} {...x} />)}
    <NewReceiptForm addNewReceipt={addNewReceipt} />
  </>
}
