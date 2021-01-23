import axios from 'axios'

const instance=axios.create({
    baseURL:'http://8.135.13.238:3000/',
    withCredentials:true
})


export default instance;