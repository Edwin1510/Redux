const InitialState = {
    count: 1,
}


const Countreducer = (state = InitialState, action) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                count: state.count + 1
            }

        case "sub":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }

}

export default Countreducer
