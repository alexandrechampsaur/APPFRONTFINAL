import * as actions from './actionTypes';

export const paysAdded = (name) => (
    {
        type: actions.PAYS_ADDED,
        name: name,
        ref : 1
    }
);

export const paysDeleted = (key) => (
    {
        type: actions.PAYS_DELETED,
        key: key
    }
);

export const recetteAdded = (name,origine) => (
    {
        type: actions.RECETTE_ADDED,
        name: name,
        ref : 2,
        origine: origine
    }
); 

export const recetteDeleted = (key) => (
    {
        type: actions.RECETTE_DELETED,
        key: key
    }
);

export const detailsAdded = (name,origine) => (
    {
        type: actions.DETAILS_ADDED,
        name: name,
        ref : 3,
        origine: origine
    }
);

export const detailsDeleted = (key) => (
    {
        type: actions.DETAILS_DELETED,
        key: key
    }
);

export const paysClicked = (name) => (
    {
        type: actions.PAYS_CLICKED,
        name: name
    }
);

export const recetteClicked = (name) => (
    {
        type: actions.RECETTE_CLICKED,
        name: name
    }
);