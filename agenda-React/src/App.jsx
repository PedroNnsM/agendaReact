import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    <Header />
    <h1>Helo world!</h1>
    </div>
  )
}

export default App
