import React, { Component } from 'react'
import team from '../../img/team.png'
import social from '../../img/social.png'
import communicate from '../../img/communicate.png'
import network from '../../img/network.png'

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
        cardData: [
            {
                id: 1,
                src: team,
                title: "Split view on teamwork",
                article: "Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",
                btnText: "Try it now"
            }, {
                id: 2,
                src: social,
                title: "Experience Unusual Bonding",
                article: "Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",
                btnText: "Learn more"
            },
            {
                id: 3,
                src: communicate,
                title: "Commitment",
                article: "Those who you play and relate with at work are your most valuable people, hence they deserve to be cherished",
                btnText: "Stay plugged"
            }, {
                id: 4,
                src: network,
                title: "Unrivalry experience",
                article: "Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",
                btnText: "Create now"
            }
        ],
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
