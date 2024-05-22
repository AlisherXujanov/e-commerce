import { BrowserRouter } from 'react-router-dom'
import AllComponents from './components/AllComponents'
import { context, initialState, globalReducer } from './state'
import { useReducer } from 'react'

// ---------------------- Toastify ------------------------------
// https://www.npmjs.com/package/react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// --------------------------------------------------------------

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  state.dispatch = dispatch

  return (
    <context.Provider value={state}>
      <div className='App'>
        <ToastContainer />
        <BrowserRouter>
          <AllComponents />
        </BrowserRouter>
      </div>
    </context.Provider>
  )
}
export default App
