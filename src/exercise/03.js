// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

const useCount = () => {
  const context = React.useContext(CountContext);
  if(!context) throw Error("useCount must be used within a CountProvider");
  return context
}

const CountProvider = props => {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount]
  return <CountContext.Provider value={value} {...props} />
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [,setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <CountProvider>
      <div>
        <CountDisplay />
        <Counter />
      </div>
    </CountProvider>
  )
}

export default App
