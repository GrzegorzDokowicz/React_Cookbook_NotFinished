import {GET_USER_DATA} from './actions';

const initialState = {
    userData: {
        userID: 1,
        name: 'John',
        lastName: 'Doe',
        photo: 'Public/recipe-background.png'
    }
};

const recipesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_USER_DATA:
            return {
                ...state,
                userData: {...payload}
            }

        default:
            return state;
    }
};

export default recipesReducer;
