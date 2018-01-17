import Vue from 'vue'
import axios from "axios"
import qs from "qs"
axios.defaults.baseURL='/';
axios.interceptors.response.use(
    response => {
        return Promise.resolve(response) 
    },
    error => {
        return Promise.reject(response);
    }
)
let api = function(url,type,options){
    url = "api" + url
    let opt = options || {};
    let instance = axios.create({
        timeout: 5000,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
    return new Promise((resolve,reject)=>{
        if(type === 'POST' || type === 'post'){
            instance.post(url,qs.stringify(opt))
            // axios({
            //     method: type,
            //     url:url,
            //     data: (type === 'POST' || type === 'post') ? qs.stringify(opt) : {},
            //     responseType: 'json',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //     }
            // })
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                alert("loading failed")
                location.replace(document.referrer)
            })
        }else if(type === 'GET' || type === 'get'){
            instance.get(url,qs.stringify(opt))
            // axios({
            //     method: type,
            //     url:url,
            //     params: (type === 'GET' || type === 'get') ? opt : {},
            //     responseType: 'json',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     }
            // })
           
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                alert("loading failed")
                location.replace(document.referrer)
            })
        }
        
    })
}

Vue.prototype.$ajax = api;
Vue.use(axios);