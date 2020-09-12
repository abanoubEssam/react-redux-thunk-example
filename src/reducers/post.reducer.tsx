export default (state = [], action: any) => {
    // if (action.type === "FETCH_POSTS") {
    //     return action.payload
    // }
    switch (action.type) {
        case "FETCH_POSTS":
            console.log("POSTS FETCHED")
            return action.payload
        default:
            return state
    }
} 