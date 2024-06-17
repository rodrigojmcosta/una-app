import axios from 'axios';

export const apiBase = axios.create({
  baseURL: process.env.REACT_APP_API
});