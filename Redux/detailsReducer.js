import * as actions from './actionTypes';

const initialState = {
    detailsList: []
}

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.DETAILS_ADDED:
            return {
                ...state,
                detailsList: state.detailsList.concat({
                    key: Math.random().toString(),
                    name: action.name,
                    ref: action.ref,
                    origine: action.origine,
                })
            };
        case actions.DETAILS_DELETED:
            return {
                ...state,
                detailsList: state.detailsList.filter(details => details.key !== action.key )
            }
        default:
             return state;
    }
};

export default detailsReducer; 