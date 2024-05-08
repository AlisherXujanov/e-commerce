import { createContext } from 'react'
import { globalReducer } from './helpers'
const context = createContext()

const initialState = {
    activatedCreatePage: false,
    titleText: '',
    darkMode: false,
}

export { 
    initialState,
    context,
    globalReducer 
}