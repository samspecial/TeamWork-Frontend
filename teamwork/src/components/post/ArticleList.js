import React, { Component } from 'react'
import { Consumer } from '../homepage/CardData'
import SinglePost from './SinglePost'
import { FaBeer } from 'react-icons/fa'
export default class ArticleList extends Component {
    onDeletePost = (id, dispatch) => {
        fetch(`/${id}, method = 'DELETE'`).then(response => response.json()).then(data => { dispatch({ type: 'DELETE_ARTICLE', payload: id }) })

    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { articleData } = value
                    return (
                        <div>
                            {articleData.map(post => (
                                <SinglePost title={post.title} article={post.article} key={post.id}
                                    url={post.url} id={post.authorId} created={post.createdOn} />

                            ))}

                            <span><FaBeer
                                onClick={this.onDeletePost} /></span>
                        </div>
                    )
                }


                }

            </Consumer>
        )
    }
}
