import {
    SCROLL_TO,
    ADD_ALERT,
    REMOVE_ALERT,
    GET_LANDING_PAGE_TEXT_DATA,
} from './actions';

const initialState = {
    scrollTo: {
        state: false,
        name: ''
    },
    alerts: [],
    landingPageTextData: {
        section1: {
            title: 'React Cookbook',
            textBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Duis venenatis mi in tristique placerat. ' +
                'Cras convallis mi mauris, id volutpat tortor pretium nec. ' +
                'Curabitur posuere eu lectus ac interdum. Aliquam mollis metus at magna iaculis pulvinar.' +
                ' Mauris tortor risus, euismod in massa quis, efficitur pretium ipsum. ' +
                'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.' +
                'Quisque convallis imperdiet imperdiet. Maecenas eu felis pellentesque, euismod ligula in, auctor nisi.' +
                ' Ut gravida et ipsum ultricies posuere. Nulla elementum convallis ultricies.'
        }
    }
};

const pageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
    case SCROLL_TO:
        return {
            ...state,
            scrollTo: {...payload}
        };
    case ADD_ALERT:
        return {
            ...state,
            alerts: [...state.alerts, payload]
        };
    case REMOVE_ALERT:
        return {
            ...state,
            alerts: state.alerts.filter(({id}) => id !== payload.id)
        };
    case GET_LANDING_PAGE_TEXT_DATA:
        return {
            ...state,
            landingPageTextData: {...payload}
        };
    default:
        return state;
    }
};

export default pageReducer;
