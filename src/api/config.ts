// const apiConfig = {
//     baseApiURL:"https://unalumni.azurewebsites.net"
// };

// export { apiConfig }
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-production-e0dd.up.railway.app/',
});

export default api;

// TO DO - Configurar Axios
