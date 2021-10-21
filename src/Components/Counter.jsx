import { useState } from 'react'

const useCounter = () => {
  const [count, setCount] = useState(0)
  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)
  const reset = () => setCount(0)
  return { count, increase, decrease, reset }
}

export default function Counter () {
  const { count, increase, decrease, reset } = useCounter()
  return (
    <>
      <div className="py-1 my-2 bg-red-900 text-red-300 rounded border-2 border-red-900">
      <b className="p-1 text-sm">Counter: {count}</b>
    </div>
      <div className='flex gap-2'>
        <button
          className='border-2 border-red-800 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-800 hover:text-red-400'
          onClick={increase}
        >
          +
        </button>
        <button
          className='border-2 border-red-800 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-800 hover:text-red-400'
          onClick={reset}
        >
          Reset
        </button>
        <button
          className='border-2 border-red-800 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-800 hover:text-red-400'
          onClick={decrease}
        >
          -
        </button>
      </div>
    </>
  )
}
