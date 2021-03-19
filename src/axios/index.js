import axios from 'axios';
import {server} from '../config/keys';



const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).token: null;
const location = window.location.pathname;

export const userInstance = axios.create({
  baseURL: `${server}`,
  headers: { "Authorization": token }
});

const admintoken = localStorage.getItem('admintoken') ? JSON.parse(localStorage.getItem('admintoken')).token: null;

export const adminInstance = axios.create({
  baseURL: `${server}/admin`,
  headers: { "Authorization": admintoken }
});

export const gameInstance = axios.create({
  baseURL: `${server}/game`,
  headers: { "Authorization": location.search('admin') !== -1 ? admintoken : token }
});