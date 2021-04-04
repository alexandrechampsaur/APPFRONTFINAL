import * as actions from './actionTypes';

const initialState = {
    recettesList: [],
    recetteClickedList: []
}

const recettesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.RECETTE_ADDED:
            return {
                ...state,
                recettesList: state.recettesList.concat({
                    key: Math.random().toString(),
                    name: action.name,
                    ref: action.ref,
                    origine: action.origine
                })
            };
        case actions.RECETTE_DELETED:
            return {
                ...state,
                recettesList: state.recettesList.filter(recette => recette.key !== action.key )
            };
        case actions.RECETTE_CLICKED:
            return {
                ...state,
                recetteClickedList: state.recetteClickedList.concat({
                    name: action.name,
                })
            };
        default:
            return state;
    }
};

export default recettesReducer; 