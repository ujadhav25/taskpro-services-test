import { FETCH_USERS, SEARCH_USER, SAVE_RATING } from './actionTypes';
import firebaseDB from '../config/firebase';

const fetchDataFromAPI = async () => {
    const data = await firebaseDB.firestore().collection('users').get();
    const accounts_data = await firebaseDB.firestore().collection('accounts').get();
    const accounts = accounts_data.docs.map(acc => ({ key: acc.id, ...acc.data() }))
    const users = data.docs.map(user => (
        {
            key: user.id,
            ...user.data(),
            ...accounts.filter(i => i.key === user.data().account)[0],
        }
    ));
    console.log('users', users);
    return users;
}

export const fetchUsers = async (dispatch) => {
    const users = await fetchDataFromAPI();
    dispatch({
        type: FETCH_USERS,
        payload: users
    })
}

export const searchUser = (name) => {
    return dispatch => {
        dispatch({
            type: SEARCH_USER,
            payload: name,
        })
    }
}

const saveRatingInFB = async (data) => {
    const res = await firebaseDB.firestore().collection("accounts").doc(data.account).set(
        {
            apps: {
                ...data.apps,
                [data.selectedApp]: {
                    ...data.apps[data.selectedApp],
                    ratings: {
                        [data.user]: data.rating
                    }
                    
                }
            }
        }
    )
    return res;
}

export const saveRating = (data) => {
    const payload = {
        ...data
    }
    saveRatingInFB(payload);
    return dispatch => {
        dispatch({
            type: SAVE_RATING,
            payload,
        })
    }
    
}

