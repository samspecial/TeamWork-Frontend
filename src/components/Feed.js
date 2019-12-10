import React, { Component } from 'react'
import NavBarMain from './NavBarMain';
import ArticleList from './post/ArticleList'
export default class Feed extends Component {
    state = {
        title: '',
        article: '',
        url: '',
        authorId: '',
        id: '',
        createdOn: ''
    }
    componentDidMount() {
        fetch('').then(response => response.json()).then(data => {
            this.setState({
                title: data.title,
                article: data.article,
                url: data.url,
                authorId: data.authorId,
                id: data.id,
                createdOn: data.createdOn
            })
        })
    }

    render() {
        // const { title, article, url, authorId, id, createdOn } = this.state
        return (
            <div className="">
                <NavBarMain />
                {/* <div className="">
                    <h3>Title: {'title'}</h3>
                    <span><p>Created On: {'createdOn'} Author Id: {'authorId'}</p></span>
                    <p>Image Url: {'url'}</p>
                    <p>Article: {'article'}</p>
                    <p>id: {'id'}</p>
                </div> */}
                <ArticleList />
            </div>
        )
    }
}
