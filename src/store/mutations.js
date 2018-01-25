import * as types from "./mutaion-types"

const mutations = {
    [types.SET_STORE](state,setStore) {
        state.setStore = setStore;
    },

    [types.STORE_INFO](state,storeInfo){
        state.storeInfo = storeInfo
    }
}

export default mutations