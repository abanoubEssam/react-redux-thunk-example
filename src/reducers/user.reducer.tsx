export default (state = [], action: any) => {
    // if (action.type === "FETCH_POSTS") {
    //     return action.payload
    // }
    switch (action.type) {
        case "FETCH_USER":
            console.log("FETCH_USER")
            return [...state, action.payload]
        default:
            return state
    }
} 