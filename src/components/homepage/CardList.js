import React, { Component } from 'react'
import { Consumer } from './CardData'
import Card from './Card';
import './Card.css';

export default class CardList extends Component {
    render() {
        return (
            <Consumer>

                {value => {
                    const { cardData } = value;
                    return (
                        <div className="cardlist">
                            {
                                cardData.map(card => (
                                    <Card class="card" key={card.id} src={card.src}
                                        title={card.title} article={card.article} button={card.btnText} />
                                ))
                            }</div>
                    )
                }}
            </Consumer>
        )
    }
}
