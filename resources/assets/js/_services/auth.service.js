// this is just sample code. this app doesn't use VUE for login auth
import axios from 'axios';
import { User } from '../_models';

export const authService = {
    login,
    logout
};

const API_URL = 'http://localhost/cbtest/api/v1/';


function login(username, password) {
    return axios
      .post(API_URL + 'login', {
        username: username,
        password: password
      })
      .then(response => {
        const user = new User('','',[]);
        if (!response.data.error) {
            user.username = username;
            user.token = response.data.data;
            user.permission = [];

            localStorage.setItem('user', JSON.stringify(user));
        }

        return user;
      });
  }

function  logout() {
    localStorage.removeItem('user');
  }

