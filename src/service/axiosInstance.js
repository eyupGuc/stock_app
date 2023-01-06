import axios from "axios";


const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
const token = escapedToken && JSON.parse(escapedToken);
//  zor olan yöntem localStorage dan okumak

export const axiosWithToken = axios.create({
    baseURL: 'https://14223.fullstack.clarusway.com/',
    headers: {Authorization: `Token ${token}`}
})