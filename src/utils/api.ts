import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies()
export const api = axios.create({
    baseURL: 'https://user-auth-node.vercel.app/',
    headers: {
        Authorization: `Bearer ${cookies['@myform.token']}`
    },
});