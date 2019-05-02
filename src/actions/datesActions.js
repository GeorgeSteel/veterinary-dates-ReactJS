import { SHOW_DATES, DELETE_DATE, ADD_DATE } from './types';

export const getDates = () => {
    return {
        type: SHOW_DATES
    }
}
export const addDates = (date) => {
    return {
        type: ADD_DATE,
        payload: date
    }
}