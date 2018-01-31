// State argument is not aplication state, only the state this reducer is responsible for (single piece of data or model)
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload
    }
    return state
}