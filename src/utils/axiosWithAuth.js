import axios from 'axios';
import url from '../components/URL'

// axiosWithAuth to replace axios in api calls for login, register
const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return (
    axios.create({
      headers: {
        authorization: token
      },
      baseURL: url
    })
  )
}

export default axiosWithAuth;
