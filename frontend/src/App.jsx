import { BrowserRouter } from 'react-router-dom'
import AllComponents from './components/AllComponents'
import { context, initialState, globalReducer } from './state'
import { useReducer } from 'react'

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  state.dispatch = dispatch

  return (
    <context.Provider value={state}>
      <div className='App'>
        <BrowserRouter>
          <AllComponents />
        </BrowserRouter>
      </div>
    </context.Provider>
  )
}
export default App
