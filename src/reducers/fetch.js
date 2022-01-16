import {ACTIONS} from "../actions/fetch"
export const initialState = {
    loading: true,
    error: false,
    data: {},
}
//action: ({type: ACTIONS.SET_DATA, payload: {info: ..., results: ...}})
//tenemos quen propagar una acción y luego cargar toda la información del estado
//en un objeto payload
export const fetchReducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.SET_DATA:
        return {
            ...initialState, //dejo error en false y piso las demás props
            loading: false,
            data: {
                info: action.payload.info,
                results: action.payload.results,
            },
        };
        case ACTIONS.SET_ERROR:
            return {
                ...initialState, //dejo data vacío y piso error y loading
                loading: false,
                error: true
            }
        
//y si no tenemos match con ACTIONS necesitamos retornar el estado inicial
//porque una función pura siempre retorna algo.        
        default:
        return state;
    };
}