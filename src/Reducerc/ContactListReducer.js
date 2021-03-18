const initialState = {
    List: 0
}

const ContactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTACT_LIST_LOADER":
            return {
                List: action.payload
            }
        default:
            return state
    }
}
export default  ContactListReducer