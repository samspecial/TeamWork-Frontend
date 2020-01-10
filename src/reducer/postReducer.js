import { GET_POST, DELETE_POST, ADD_POST } from '../actions/types';

const initialState = {
    articleData: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POST:
            return {
                ...state
            };
        case DELETE_POST:
            return {
                articleData: state.articleData.filter(article => article.id !== action.payload)
            };
        case ADD_POST:
            return {
                ...state,
                articleData: [action.payload, ...state.articleData]
            }
        default:
            return state;
    }
}