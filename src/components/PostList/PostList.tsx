import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers, fetchPosts } from '../../actions/actions.root';
import UserHeader from '../UserHeader/UserHeader';

export interface PostListProps {
    // fetchPosts: Function,
    posts: any[],
    fetchPostsAndUsers: Function
}


export interface PostListState {

}



class PostList extends Component<PostListProps, PostListState> {
    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }
    render() {

        return (
            <div className="ui relaxed divided list">
                {this.renderList() ? this.renderList() : null}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);