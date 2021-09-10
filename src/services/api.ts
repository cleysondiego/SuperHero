import axios from 'axios';
import md5 from 'md5';
import { REACT_APP_MARVEL_API_PRIVATE_KEY, REACT_APP_MARVEL_API_PUBLIC_KEY } from '@env';

const timestamp = Date.now();
const hash = md5(`${timestamp}${REACT_APP_MARVEL_API_PRIVATE_KEY}${REACT_APP_MARVEL_API_PUBLIC_KEY}`);

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: `${REACT_APP_MARVEL_API_PUBLIC_KEY}`,
    ts: timestamp,
    hash: hash,
    limit: 20
  }
})
