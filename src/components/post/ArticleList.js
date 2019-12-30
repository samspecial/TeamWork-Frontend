import React, { Component } from 'react'
import { Consumer } from '../homepage/CardData'
import SinglePost from './SinglePost'

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
                                    id={post.id} />

                            ))}
                            <p>{"The irony of life is that when we get pushed to the wall, the long awaited solution will show up."}</p>
                        </div>
                    )
                }


                }

            </Consumer>
        )
    }
}
