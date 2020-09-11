import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/actions.root';

export interface PostListProps {
    fetchPosts: Function
}

export interface PostListState {

}

class PostList extends Component<PostListProps, PostListState> {
    componentDidMount(){
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>
               Posts List
            </div>
        );
    }
}


export default connect(null, { fetchPosts })(PostList);