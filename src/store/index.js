import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
  json: []
}

const mutations = {
  setJson (state, data) {
    state.json = data
  }
}

// const actions = {
//   getJson (context) {
//     // 调用koa后端getJSON接口
//     fetch('http://127.0.0.1:3000/json', {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }).then((res) => {
//       if (res.state === 200) {
//         return res.json()
//       }
//     }).then((json) => {
//       context.commit('setJson', Array.from(json))
//     })
//   }
// }

const actions = {
  // 不同的地址要记得调整跨域反向代理
  getJson (context) {
    axios.get('/getJsn', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.data
      }
    }).then(json => {
      // console.log(typeof Array.from(json), Array.from(json))
      context.commit('setJson', json)
    })
  },
  getJsons (context) {
    axios.get('/getJsons', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status === 200) {
        return res.data
      }
    }).then(json => {
      // console.log(typeof Array.from(json), Array.from(json))
      context.commit('setJson', json)
    })
  }
}

const store = new Vuex.Store({
  mutations,
  state,
  actions
})

export default store
