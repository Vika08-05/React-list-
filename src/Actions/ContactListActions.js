export const getAllContacts = (contactList) => {
    return {
        type: "CONTACT_LIST_LOADER",
        payload:contactList
    }
}

export const addNewContact = (contactList) => {
    return {
        type: "ADD_NEW_CONTACT",
        payload:contactList
    }
}

export const onDelete = (contactList) => {
    return {
        type: "DELETE_ONE_CONTACT",
        payload: contactList
    }
}
