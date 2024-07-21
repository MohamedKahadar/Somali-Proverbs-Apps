import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { randomQuote } from './data/quotes'

function App() {
  const [quoto, setQuoto] = useState("")
  useEffect(()=>{
    setQuoto(randomQuote
      ())

    randomQuote()

  },[])

  const handleClick = ()=>{
    setQuoto(randomQuote())

  }

  return (
    <>
     <div className='container'>
      <h1>"{quoto}"</h1>
      <button onClick={handleClick}>proverbs generator</button>
     </div>
    </>
  )
}

export default App
