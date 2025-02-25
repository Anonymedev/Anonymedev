import SITECONFIG from '../../utils/config/config.json';
import axios      from 'axios';


/* Axios config initiale */
 
const axiosConfig = axios.create({
    baseURL: process.env.NODE_ENV==='development'?SITECONFIG.DEV.apiBaseURL:SITECONFIG.PROD.apiBaseURL,
    headers: {
        frontURL: window.location.href
    },
    withCredentials: true
});


/* Exportation */

export default axiosConfig;