import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions/postAction';

import PropTypes from 'prop-types';

import SinglePost from './SinglePost';

class ArticleList extends Component {
    componentDidMount() {
        this.props.getPost();
    }

    onDeletePost = (id, dispatch) => {
        fetch(`/${id}, method = 'DELETE'`).then(response => response.json()).then(data => { dispatch({ type: 'DELETE_ARTICLE', payload: id }) })

    }
    render() {
        const { postValue } = this.props;
        return (

            <div>
                {postValue.map(post => (
                    <SinglePost title={post.title} article={post.article} key={post.id}
                        id={post.id} />

                ))}
                <p>{"The irony of life is that when we get pushed to the wall, the long awaited solution will show up."}</p>
            </div>

        )
    }
}

ArticleList.propTypes = {
    postValue: PropTypes.array.isRequired,
    getPost: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    postValue: state.post.articleData
});

export default connect(mapStateToProps, { getPost })(ArticleList);