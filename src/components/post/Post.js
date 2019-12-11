import React, { Component } from 'react'
import NavBarMain from '../NavBarMain'
import { Consumer } from '../homepage/CardData';
import uuid from 'uuid'
import './Post.css'

export default class Post extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            article: "",
            image: ""
        }
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        if (!this.canSubmitData()) {
            return
        }
        const { title, article, image } = this.state;
        const newArticle = {
            id: uuid(),
            title,
            article,
            image
        }
        dispatch({ type: 'ADD_POST', payload: newArticle });
        //    Clear state
        this.setState({
            title: '',
            article: '',
            image: ''

        });
        this.props.history.push('/feed')

    }
    onPostChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    canSubmitData = () => {
        const { article, title } = this.state;
        return article.length > 0 && title.length > 0
    }

    render() {
        const { article, title, image } = this.state;
        const isEnabled = this.canSubmitData()
        return (
            <Consumer>

                {value => {
                    const { dispatch } = value;
                    return (
                        <React.Fragment>
                            <NavBarMain />
                            <div className="post-container">
                                <div className="post-head"><h3 className="post">{"Share thoughts"}</h3>
                                    <p className="paragraph">{"This is aimed at increasing team bonding and relationship, feel free to interact and share knowledge. Areas you are expected to share knowledge are but not limited to the followings: History, Entrepreneurship, Fitness, Family, Faith, Relationship, Entertainment, Fashion, Politics, Technology"}</p>
                                </div>
                                <section className="">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)} className="bg measure shadow-5" action="article-post" method="post" acceptCharset="utf-8" encType="multipart/form-data">
                                        <h1>Create Post</h1>
                                        <div>
                                            <div className="tl">
                                                <label className="db mv2 fw4 lh-copy f6" htmlFor="article-title">Title</label>
                                                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text"
                                                    name="title" id="title" placeholder="Title" value={title} onChange={this.onPostChange} />
                                            </div>
                                            <div className="tl">
                                                <label className="db mv2 fw4 lh-copy f6" htmlFor="article">Article</label>
                                                <textarea id="comment" name="article" aria-describedby="comment-desc" className="pa2 input-reset ba bg-transparent w-100 measure"
                                                    placeholder="Publish your article" value={article} onChange={this.onPostChange}></textarea>
                                            </div>
                                            <div className="tl">
                                                <span className="db mv2 fw4 lh-copy f6" htmlFor="image">Image</span>
                                                <input type="file" id="image" name="image" aria-describedby="image-desc" className="pa2 input-reset" value={image} onChange={this.onPostChange} />
                                            </div>
                                        </div>
                                        <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" disabled={!isEnabled} type="submit" value="Publish" /></div>
                                    </form>



                                </section>
                            </div>
                        </React.Fragment>
                    )
                }}

            </Consumer>

        )
    }
}
