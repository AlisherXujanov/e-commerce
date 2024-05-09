function globalReducer(state, action) {
    switch (action.type) {
        case "activate-dark-mode":
            return { ...state, darkMode: true }
        case "setActivatedCreatePage":
            return { ...state, activatedCreatePage: !state.activatedCreatePage }
        case "saveText":
            return { ...state, titleText: action.value }
        case 'setProductBoolean':
            return {...state, productBoolean: !state.productBoolean}
        case 'setBackgroundChan':
            return{...state, backgroundChan: action.value}
        case 'setConText':
            return{...state, conText:action.value}
    }
}

export { globalReducer }



 