// three parameters: type, payload, action
// if unspecified payload => accept second parameter as action
// Fetched data inserted as action parameter

// compare predefined type and fetched data type
export default (type, payload) => (state = {
    type: type,
    payload: payload || {},
}, action) => {
    switch(state.type) {
        case action.type:
            return action;

        default:
            return action;
    }
};