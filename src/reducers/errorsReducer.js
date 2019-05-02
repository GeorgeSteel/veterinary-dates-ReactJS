import { SHOW_ERROR } from '../actions/types';

// Initial state, each reduce must have his own state
const initialState = {
    error: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_ERROR:
            return {
                error: action.payload
            };
    
        default:
            return state;
    }
}