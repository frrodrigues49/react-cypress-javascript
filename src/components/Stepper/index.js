import { useState } from 'react'
import './styles.css'

export default function Stepper({ initial = 0 }) {
  const [count, setCount] = useState(initial)

  return (
    <div data-testid="stepper">
      <button aria-label="decrement" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>{count}</span>
      <button aria-label="increment" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  )
}