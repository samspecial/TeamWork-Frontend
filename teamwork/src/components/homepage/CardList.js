import React, { Component } from 'react'
import { Consumer } from './CardData'
import Card from './Card';

export default class CardList extends Component {
    render() {
        return (
            <Consumer>

                {value => {
                    const { cardData } = value;
                    return (
                        <div> {
                            cardData.map(card => (
                                <Card key={card.id} src={card.src}
                                    title={card.title} button={card.btnText} />
                            ))
                        }</div>
                    )
                }}
            </Consumer>
        )
    }
}
