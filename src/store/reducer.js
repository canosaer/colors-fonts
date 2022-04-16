const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_PALETTE':
            return {
                ...state,
                activePalette: action.payload
            }
        case 'UPDATE_FONTS':
            return {
                ...state,
                activeFonts: action.payload
            }
        default:
            return state
    }
}

export default reducer