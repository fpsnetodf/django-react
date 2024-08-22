import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='border-spacing-1 border w-6/12 rounded-lg mx-auto my-32 h-56 bg-slate-100'>      
      <h1 className='text-center text-green-500 text-4xl my-5'>Vite + React</h1>
      <div className="flex justify-center">
        <button className='hover:bg-sky-400 px-4 py-2 rounded-lg me-4 bg-sky-300 hover:text-white' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-purple-500 font-bold text-xl text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
