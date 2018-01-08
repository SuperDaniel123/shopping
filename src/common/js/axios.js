import Vue from 'vue'
import axios from "axios"
import qs from "qs"
axios.defaults.baseURL='/';

// axios.interceptors.response.use(
//     response => {
//         return Promise.resolve(response) 
//     },
//     error => {
//         return Promise.reject(response);
//     }
// )

var api = function(url,type,options){
    url = "api" + url
    let opt = options || {}
    return new Promise((resolve,reject)=>{
        if(type === 'POST' || type === 'post'){
            axios({
                method: type,
                url:url,
                data: (type === 'POST' || type === 'post') ? qs.stringify(opt) : {},
                responseType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
        }else if(type === 'GET' || type === 'get'){
            axios({
                method: type,
                url:url,
                params: (type === 'GET' || type === 'get') ? opt : {},
                responseType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
           
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
        }
        
    })
}

Vue.prototype.$ajax = api;
Vue.use(axios);