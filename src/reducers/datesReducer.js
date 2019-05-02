import { SHOW_DATES, DELETE_DATE, ADD_DATE } from '../actions/types';

// Initial state, each reduce must have his own state
const initialState = {
    dates: [
        {
            id:0,
            date: '10-20-30', 
            hour: '6:00 PM', 
            pet: 'Michi', 
            owner: 'Lalo', 
            symptoms: 'vale madre'
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_DATES:
            return {
                ...state
            }
            break;
    
        default:
            return state;
            break;
    }
}
