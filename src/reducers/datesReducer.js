import { SHOW_DATES, DELETE_DATE, ADD_DATE } from '../actions/types';

// Initial state, each reduce must have his own state
const initialState = {
    dates: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DATES:
            return {
                ...state
            }
        case ADD_DATE:
            return {
                ...state,
                dates: [ ...state.dates, action.payload ]
            }    
        default:
            return state;
    }
}
