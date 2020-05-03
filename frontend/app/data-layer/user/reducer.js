import {GET_USER_DATA} from './actions';

const initialState = {
    userData: {
        userID: 1,
        name: 'John',
        lastName: 'Doe',
        photo: 'Public/recipe-background.png',
        recipes: [
            {
                title: 'Tajna zupa',
                path: '/'
            },
            {
                title: 'Dobra Pyrka',
                path: '/'
            },
            {
                title: 'Befsztyczek',
                path: '/'
            },
            {
                title: 'No i oczywiście Schabowy',
                path: '/'
            }]
    }
};

const recipesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
    case GET_USER_DATA:
        return {
            ...state,
            userData: {...payload}
        };

    default:
        return state;
    }
};

export default recipesReducer;
