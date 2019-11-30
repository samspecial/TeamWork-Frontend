import React, { Component } from 'react'
import { Consumer } from '../homepage/CardData';
import uuid from 'uuid'

export default class Article extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            article: "",
            gifTitle: "",
            image: ""
        }
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { title, article } = this.state;
        const newArticle = {
            id: uuid(),
            title,
            article,
        }
        dispatch({ type: 'ADD_POST', payload: newArticle });
        this.setState({
            title: '',
            article: '',

        })

    }
    onPostChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { title, article, image, gifTitle } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <h3>{"Share thoughts and how you feels with your colleagues"}</h3>
                            <p>{"This is aim at increasing team bonding and relationship, feel free to interact and share knowledge."}</p>
                            <p>{"areas you are expected to share knowledge are but not limited to the followings: History, Entrepreneurship, Fitness, Family, Faith, Relationship, Entertainment, Fashion, Politics, Technology"}</p>
                            <article className="br2 ba pv5 ph4 dark-gray b--black-20 db mv4 w-100 w-50-m mw6 center shawdow-5">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)} className="measure" action="article-post" method="post" acceptCharset="utf-8">
                                    <legend>Article Post</legend>
                                    <fieldset id="article-field" className="ba b--transparent ph0 mh0">

                                        <div className="mt3 db">
                                            <label className="db lh-copy f6" htmlFor="article-title">Title</label>
                                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"
                                                name="title" id="title" placeholder="Title" value={title} onChange={this.onPostChange} />
                                        </div>
                                        <div className="mt3 db">
                                            <label className="db fw4 lh-copy f6" htmlFor="article">Article</label>
                                            <textarea id="comment" name="article" aria-describedby="comment-desc" className="pa2 input-reset ba bg-transparent w-100 measure"
                                                placeholder="Publish your article" value={article} onChange={this.onPostChange}></textarea>
                                        </div>
                                    </fieldset>
                                    <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Publish" /></div>
                                </form>

                                <form onSubmit={this.onSubmit} className="measure" action="article-post" method="post" encType="multipart/form-data" acceptCharset="utf-8">
                                    <legend>GIF Post</legend>
                                    <fieldset id="article-field" className="ba b--transparent ph0 mh0">

                                        <div className="mt3 db">
                                            <label className="db lh-copy f6" htmlFor="image-title">Title</label>
                                            <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"
                                                name="gifTitle" id="title" placeholder="Title" value={gifTitle} onChange={this.onPostChange} />
                                        </div>
                                        <div className="mt3 db">
                                            <label className="db lh-copy f6" htmlFor="image">Image</label>
                                            <input type="file" id="image" name="image" aria-describedby="image-desc" className="pa2 input-reset"
                                                placeholder="Publish your article" value={image} onChange={this.onPostChange} />
                                        </div>
                                    </fieldset>
                                    <div className="mt3"><input className="b ph3 pv2 input-reset ba bg-transparent grow pointer f6" type="submit" value="Publish" /></div>
                                </form>
                            </article>
                        </div>
                    )
                }}

            </Consumer>

        )
    }
}
