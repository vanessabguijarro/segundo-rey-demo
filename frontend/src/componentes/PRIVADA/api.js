
import axios from 'axios';

const isDemo = true;

const baseURL = isDemo
  ? 'https://segundo-rey-demo.onrender.com/demo'
  : import.meta.env.VITE_API_URL;

export const getVendedores = () => axios.get(`${baseURL}/vendedores`);
export const getVacaciones = () => axios.get(`${baseURL}/vacaciones`);
