import { FETCH_HOME_DATA } from '../actions/home';

const initialState = {
    list: [],
};

export default (state = initialState, action) => {
    switch (action?.type) {
        case FETCH_HOME_DATA:
            return action.payload;
        default:
            return state;
    }
}
