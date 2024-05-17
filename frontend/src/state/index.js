// HOW TO CREATE A CENTRAL STATE (memory) for the app
// 1. Create a state folder with index.js
// 2. Create a central function that is needed to change the state (in helpers.js)
// 3. Create a context in index.js that is shared among all components and export it too
// 4. In the main (largest) component, that is App.js, import context, initialState, 
//    and global function that is needed for changing the state.
// 5. Create a useReducer hook and send global function and initialState to it and 
//    receive a state and dispatch function
// ```const [state, dispatch] = useReducer(globalReducer, initialState)```
// 6. With the help of context, create a context.Provider and wrap all the components
//    and send the value attribute as state. 
// 7. Connect dispatch function into state like this:
//    state.dispatch = dispatch
// ========================================================
// HOW TO USE THE CENTRAL STATE IN A COMPONENT
// 1. Import context in the component with useContext hook
// 2. Put context into useContext hook and receive the state
// ```const state = useContext(context)```
// So this state is now available throughout the component

import { createContext } from 'react'
import { globalReducer } from './helpers'
const context = createContext()
const KeyboardSymbols = '!@#$%^&*()_+=-'
const BASE_URL = 'https://jsonplaceholder.typicode.com/'

const initialState = {
    currentLanguage: 'en',
    photos: [],
    users: [],


    activatedCreatePage: false,
    titleText: '',
    descriptionText: '',
    darkMode: false,
    image: null,
}

export {
    initialState,
    context,
    globalReducer,
    KeyboardSymbols,
    BASE_URL
}