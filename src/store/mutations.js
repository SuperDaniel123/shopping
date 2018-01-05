import * as types from "./mutaion-types"

const mutations = {
    [types.SET_STORE](state,setStore) {
        state.setStore = setStore;
    }
}

export default mutations