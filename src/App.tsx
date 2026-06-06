import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>Intlytics UI</h1>
      <p className="tagline">
        Analytics dashboard — scaffolded and ready to build.
      </p>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>
      </div>
      <p className="stack">Vite + React 19 + TypeScript</p>
    </main>
  )
}

export default App
