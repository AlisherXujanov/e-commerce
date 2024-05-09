import { createContext } from 'react'
import { globalReducer } from './helpers'
const context = createContext()

const initialState = {
    activatedCreatePage: false,
    titleText: '',
    productBoolean:true,
    darkMode: false,
    backgroundChan:'',
    conText:''
}

export { 
    initialState, 
    context,
    globalReducer 
}