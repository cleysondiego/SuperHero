import axios from 'axios';
import md5 from 'md5';
import { REACT_APP_MARVEL_API_PRIVATE_KEY, REACT_APP_MARVEL_API_PUBLIC_KEY } from '@env';

const getParams = () => {
  const ts = Date.now();
  const hash = md5(ts + REACT_APP_MARVEL_API_PRIVATE_KEY + REACT_APP_MARVEL_API_PUBLIC_KEY);
  const apikey = REACT_APP_MARVEL_API_PUBLIC_KEY;

  return { ts, hash, apikey };
}

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: getParams(),
});
