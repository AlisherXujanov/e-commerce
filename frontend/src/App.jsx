import { BrowserRouter } from 'react-router-dom'
import AllComponents from './components/AllComponents'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>
    </div>
  )
}

export default App


// Create a new branch with:   git checkout -b 'new-branch'
// Push new branch

