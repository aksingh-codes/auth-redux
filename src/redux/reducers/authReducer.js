const INITIAL_STATE = {
    isSignedIn: null,
    userId: 'this will not be stored in localstorage'
}


const authReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {...state, isSignedIn: true}

        case 'SIGN_OUT':
            return {...state, isSignedIn: false}

        default:
            return state
    }
}

export default authReducer 