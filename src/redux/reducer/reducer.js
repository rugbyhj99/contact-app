let initialState = {
    contactList: [],
    searchBoxText: "",
};

function reducer(state=initialState, action){
    const {type, payload} = action
    switch(type){
        case "ADD_CONTACT":
            const newId = state.contactList.length > 0
                ? Math.max(...state.contactList.map(contact => contact.id)) + 1
                : 1;
            return{
                ...state, 
                contactList: [ ...state.contactList, { id: newId, name: payload.name, phoneNumber: payload.phoneNumber },],
            };
        case "REMOVE_CONTACT":
            return {
                ...state,
                contactList: state.contactList.filter(item => item.id !== action.payload.id),
            }
        case "SEARCH_NAME":
            return{
                ...state, searchBoxText : payload.searchBoxText
            };
        default:
            return { ...state};
    }
    
}

export default reducer;