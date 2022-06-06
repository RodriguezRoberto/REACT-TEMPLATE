import axios from "axios";

export const actions = {
    setIsLoading: 'SET_IS_LOADING'
}

const getConfig = (  ) => ({
    headers: { Authorization: `Bearer ${ localStorage.getItem( 'token' ) }` }
})

export const setIsLoading = ( isLoading ) => ({
    type: actions.setIsLoading,
    payload: isLoading
})

export const startLoadingScreenThunk = (  ) => {
    return dispatch => {
        dispatch(setIsLoading( true ) )
    }
};

export const endLoadingScreenThunk = (  ) => {
    return dispatch => {
        dispatch(setIsLoading( false ) )
    }
};