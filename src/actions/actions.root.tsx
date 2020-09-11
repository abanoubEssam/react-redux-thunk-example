import { Dispatch } from 'redux'
import jsonPlaceHolder from '../apis/jsonPlaceHolder'

export const fetchPosts = () => async (dispatch: Dispatch) => {
    const response = await jsonPlaceHolder.get("/posts")
    dispatch({ type: "FETCH_POSTS", payload: response })
}
