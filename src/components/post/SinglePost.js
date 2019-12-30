import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../homepage/CardData';
import Comment from './Comment';

import { FaPencilAlt, FaTimes } from 'react-icons/fa';
export default class SinglePost extends Component {
    constructor() {
        super()
        this.state = {
            id: "",
            title: "",
            article: ""

        }
    }
    shortenArticle = (article) => {
        let newLength = article.slice(0, 20);
        return newLength;
    }

    onDeleteClick = (id, dispatch) => {
        dispatch({ type: 'DELETE_ARTICLE', payload: id })
    }

    onUpdate = (id, dispatch, e) => {
        e.preventDefault();
        const { title, article } = this.state;
        const updateArticle = {
            title,
            article,
        }

        dispatch({ type: 'EDIT_ARTICLE', payload: { ...updateArticle, id } });
        //    Clear state

        this.setState({
            title,
            article,
        });

    }
    render() {
        const { title, article, id } = this.props;
        console.log(this.props);
        const shortened = this.shortenArticle(article);
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (<React.Fragment>
                        <section>
                            <article>
                                <h2>{title}</h2>
                                <p>{article.length > 20 ? shortened : article}</p>
                                <span><FaTimes onClick={this.onDeleteClick.bind(this, id, dispatch)} /><Link to={`/feed/edit/${id}`}> <FaPencilAlt /></Link></span>
                            </article>
                            <Comment />
                        </section>

                    </React.Fragment>)
                }}
            </Consumer>
        )
    }
}


// onClick={this.onUpdate.bind(this, id, dispatch)}