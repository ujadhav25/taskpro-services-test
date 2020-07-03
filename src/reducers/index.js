import { FETCH_USERS, SEARCH_USER, SAVE_RATING } from '../actions/actionTypes';


const initialState = {
    users: [],
    searchedUsers: [],
    error: false,
}

const Users = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: [
                    ...action.payload
                ],
                searchedUsers: [
                    ...action.payload
                ]
            }

        case SEARCH_USER:
            const searchedUsers = state.searchedUsers.filter(user => user.name.toLowerCase().includes(action.payload.toLowerCase()));
            if (action.payload === '') {
                return {
                    ...state,
                    searchedUsers: state.users,
                }
            }
            return {
                ...state,
                searchedUsers,
            }

        case SAVE_RATING:
            console.log('payload SAVE_RATING reducer', action.payload, state);
            return {
                ...state
            }

        default:
            return state;
    }
}

export default Users;
