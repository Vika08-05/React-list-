export const getAllContacts = (contactList) => {
    return {
        type: "CONTACT_LIST_LOADER",
        payload:contactList
    }
}