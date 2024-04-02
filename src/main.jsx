import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios'
import Cookies from 'js-cookie';

axios.defaults.baseURL = 'http://localhost/api/';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('token')}`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
