import React, { Component } from 'react';


class Card extends Component {
    // constructor(props) {
    //     super(props)

    // }
    render() {
        return (

            <article className="br2 ba dark-gray b--black-10 dib mv4 w-100 w-50-m w-25-l mw5">
                <img src={this.props.src} className="db w-100 br2 br--top" alt="Little kitten looking menacing." />
                <div className="pa2 ph3-ns pb3-ns">
                    <h3>{this.props.title}</h3>
                    <p className="f6 lh-copy measure mt2 mid-gray">
                        {this.props.article}
                    </p>
                    <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" href="/">{this.props.button}</a>
                </div>
            </article>
        )
    }
}

export default Card;