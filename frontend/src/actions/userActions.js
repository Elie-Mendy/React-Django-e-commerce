import axios from 'axios';
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
} from '../constants/userConstants'


// redux-thunk allows us to return async function instead of regular actions 
export const login = (email, password) => async (dispatch) => {
    try {
        // dispatch the LOGIN RESUEST action 
        dispatch({type : USER_LOGIN_REQUEST});

        // Set and Launch a request
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/login/',
            {'username': email, 'password': password},
            config
        );
        
        // If the request successed,
        // Dispatch the LOGIN SUCCESS action 
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        // Store data from the localStorage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
    
}



export const logout = () => (dispatch) => {
    // Remove data from the localStorage
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}