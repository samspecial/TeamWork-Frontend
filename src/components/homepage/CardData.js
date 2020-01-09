import React, { Component } from 'react'


const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_ARTICLE':
            return {
                ...state,
                articleData: state.articleData.filter(article => article.id !== action.payload)
            };
        case 'ADD_POST':
            return {
                ...state,
                articleData: [action.payload, ...state.articleData]
            };
        case 'EDIT_ARTICLE':
            return {
                ...state,
                articleData: state.articleData.map(article => article.id === action.payload.id ? (article = action.payload) : article)
            };
        case 'DELETE_COMMENT':
            return {
                ...state,
                commentData: state.commentData.filter(article => article.id !== action.payload)
            };
        default:
            return state
    }
}
export class Provider extends Component {

    state = {

        articleData: [

        ],
        commentData: [],
        feed: [],
        dispatch: action => this.setState(state => reducer(state, action))

    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
