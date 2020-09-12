import { Dispatch } from 'redux'
import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import * as _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch: any , getState: any) => {
    console.log("About to fet posts")
    await dispatch(fetchPosts())
    const userIds = _.uniq(_.map(getState().posts , "userId"))
    // console.log("fetchPostsAndUsers -> getState.posts", getState().posts)
    console.log("fetchPostsAndUsers -> userIds", userIds)
    userIds.forEach( id =>  dispatch(fetchUser(id)))
}

export const fetchPosts = () => async (dispatch: Dispatch) => {
    const response = await jsonPlaceHolder.get("/posts")
    dispatch({ type: "FETCH_POSTS", payload: response.data })
}

// export const fetchUser = (id: number) => (dispatch: Dispatch) => _fetchUserMemoize(id, dispatch)
// const _fetchUserMemoize = _.memoize(async (id: number, dispatch: Dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`)
//     dispatch({ type: "FETCH_USER", payload: response.data })
// })


export const fetchUser = (id: number) => async (dispatch: Dispatch) => {
    const response = await jsonPlaceHolder.get(`/users/${id}`)
    dispatch({ type: "FETCH_USER", payload: response.data })
}