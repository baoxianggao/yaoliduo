import Vue from 'vue'
import Vuex from 'vuex'
import initData from '../utils/data.json'
Vue.use(Vuex)
console.log('initData:', initData)

// 根据药品分类查询列表
// @classification 药品分类 eg:'专科用药'
function getDataByClassification(classification) {
  let tempDataList = []
  debugger
  if (!classification) {
    return tempDataList
  } else {
    if (classification === '全部分类') {
      tempDataList = initData
    } else {
      initData.forEach(item => {
        if (item.classification === classification) {
          tempDataList.push(item)
        }
      })
    }
    return tempDataList
  }
}

// 根据名称查询列表
// @name 输入名称 eg:'易善复'
function getDataByName(name) {
  let tempDataList = []
  if (!name) {
    // 不输入值展示所有数据
    tempDataList = initData
  } else {
    initData.forEach(item => {
      if (
        item.productName.indexOf(name) > -1 ||
        item.commonName.indexOf(name) > -1
      ) {
        tempDataList.push(item)
      }
    })
    return tempDataList
  }
}
export default new Vuex.Store({
  state: {
    initData: initData, //初始数据
    currentList: [], //当前列表所有数据
    currentRecord: {}, //当前详情展示数据
    currentClasses: '全部用药' //默认为全部分类,当右边菜单栏点击时候保存类别
  },
  mutations: {
    SET_CURRENTLIST(state, payload) {
      console.log('SET_CURRENTRECORD_', payload)
      state.currentList = payload
    },
    SET_CURRENTRECORD(state, payload) {
      state.currentRecord = payload || []
    },
    Modify_Classes(state, payload) {
      console.log('state.currentClasses_', payload)
      state.currentClasses = payload || ''
    }
  },
  actions: {
    // 根据药品类型查询
    queryByClassification({ commit }, classification) {
      let currentData = getDataByClassification(classification)
      commit('SET_CURRENTLIST', currentData)
    },
    // 根据输入名称查询
    queryByName({ commit }, name) {
      let currentData = getDataByName(name)
      commit('SET_CURRENTLIST', currentData)
    },
    // 当前详情数据
    currentRecord({ commit }, current) {
      commit('SET_CURRENTRECORD', current)
    },
    // 点击菜单选中改变当前分类
    classesModify({ commit }, classes) {
      commit('Modify_Classes', classes)
    }
  }
})
