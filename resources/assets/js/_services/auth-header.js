import Cookies from 'js-cookie';

export function authHeader() {
    // return authorization header with jwt token
    let token = Cookies.get('CBSTORAGE_BEARER-TOKEN');

    if (token) {
        return { 'Authorization': 'Bearer ' + JSON.parse(token) };
    } else {
        return {};
    }
}