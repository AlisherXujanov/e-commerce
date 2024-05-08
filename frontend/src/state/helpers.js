function globalReducer(state, action) {
    switch (action.type) {
        case "activate-dark-mode":
            return { ...state, darkMode: true }
        case "setActivatedCreatePage":
            return { ...state, activatedCreatePage: !state.activatedCreatePage }
        case "saveText":
            return { ...state, titleText: action.value }
    }
}

export { globalReducer }



