function globalReducer(state, action) {
    switch (action.type) {
        case "CHANGE_LANG":
            return { ...state, currentLanguage: action.language }
        case "setPhotos":
            return { ...state, photos: action.payload }
        case "setUsers":
            return { ...state, users: action.payload }
        case "activate-dark-mode":
            return { ...state, darkMode: true }
        case "setActivatedCreatePageTrue":
            return { ...state, activatedCreatePage: true }

        case "setActivatedCreatePageFalse":
            return { ...state, activatedCreatePage: false }

        case "saveText":
            return { ...state, titleText: action.value }
        case 'setDescription':
            return { ...state, descriptionText: action.value }
        case 'setImage':
            return { ...state, image: action.value }
    }
}

export { globalReducer }



