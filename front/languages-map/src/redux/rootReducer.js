const initialState = {
    city : {},
}

const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case "SET_UPDATABLE_ID" : {
            return {
                ...state,
                city : action.payload
            }
        }
        default : 
            return state;
        ;
    }
}

export default rootReducer;