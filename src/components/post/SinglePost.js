import React, { Component } from 'react'

export default class SinglePost extends Component {
    render() {
        const { title, article, image } = this.props
        return (

            < div >
                <h2>{title}</h2>
                <p>{article}</p>
                <div></div>
                <div>
                    <textarea className=""></textarea>
                    <button>{'Add'}</button>
                </div>
            </div >
        )
    }
}
