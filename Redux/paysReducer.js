import * as actions from './actionTypes';

const initialState = {
    paysList: [],
    paysClickedList: []
}

const paysReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.PAYS_ADDED:
            return {
                ...state,
                paysList: state.paysList.concat({
                    key: Math.random().toString(),
                    name: action.name,
                    ref: action.ref
                })
            };
        case actions.PAYS_DELETED:
            return {
                ...state,
                paysList: state.paysList.filter(pays => pays.key !== action.key )
            };
        case actions.PAYS_CLICKED:
            return {
                ...state,
                paysClickedList: state.paysClickedList.concat({
                    name: action.name,
                })
            };
        default:
            return state;
    }
};

export default paysReducer; 