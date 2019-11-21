import React, { Component } from 'react'

const Context = React.createContext();
export class Provider extends Component {

    state = {
        cardData: [
            {
                id: 1,
                src: "url.mp4",
                title: "Experience Unusual Bonding",
                article: "Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",
                btnText: "Try it now"
            }, {
                id: 2,
                src: "url.mp4",
                title: "Experience Unusual Bonding",
                article: "Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",
                btnText: "Learn more"
            },
            {
                id: 3,
                src: "url.mp4",
                title: "Experience Unusual Bonding",
                article: "Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",
                btnText: "Stay plugged"
            }, {
                id: 4,
                src: "url.mp4",
                title: "Experience Unusual Bonding",
                article: "Those who you play and relate with at work are your most valuble people, hence they deserve to be cherished",
                btnText: "Create now"
            }
        ]
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
