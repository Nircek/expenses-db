import './App.css'
import NewReceiptForm from './NewReceiptForm';
import Receipt from './Receipt';
import { useLocalStorage } from './utils';

const defaultValue = [
  { id: 1, date: "2020-03-30", where: "Żabka", list: [{ what: "Apple", amount: 3, price: 1.00 }] },
  { id: 2, date: "2020-03-31", where: "Biedronka", list: [{ what: "Apple", amount: 15, price: 0.50 }] }
];
export default function App() {
  const [receipts, setReceipts] = useLocalStorage('receipts', defaultValue);

  const addNewReceipt = (details) => {
    setReceipts(r => [...r, {
      id: Math.max(...r.map(x => x.id), 0) + 1,
      ...details,
      list: []
    }])
  }
  const setList = (id) => (mutate) => setReceipts(r => r.map(x => x.id != id ? x : { ...x, list: mutate(x.list) }))

  return <>
    <button onClick={() => setReceipts(defaultValue)}> Clear </button>
    {receipts.map(x => <Receipt key={x.id} setList={setList(x.id)} {...x} />)}
    <NewReceiptForm {...{ addNewReceipt }} />
  </>
}
