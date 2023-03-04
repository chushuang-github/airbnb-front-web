import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { 
  getHomeGoodPriceData, 
  getHomeHighScoreData, 
  getHomeDiscountData, 
  getHomeHotRecommendData,
  getHomeLongForData,
  getHomePlusData
} from "@/services"

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }){
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongForInfoAction(state, { payload }){
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
})

// 同步action
const { 
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction, 
  changeDiscountInfoAction, 
  changeRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction
} = homeSlice.actions

// 异步action
const fetchHomeDataAction = createAsyncThunk("fetchData", (payload, store) => {
  // 高性价比房源
  getHomeGoodPriceData().then(res => {
    store.dispatch(changeGoodPriceInfoAction(res))
  })
  // 高分好评房源
  getHomeHighScoreData().then(res => {
    store.dispatch(changeHighScoreInfoAction(res))
  })
  // 热门目的地
  getHomeDiscountData().then(res => {
    store.dispatch(changeDiscountInfoAction(res))
  })
  // 精彩之地
  getHomeHotRecommendData().then(res => {
    store.dispatch(changeRecommendInfoAction(res))
  })
  // 你可能想去
  getHomeLongForData().then(res => {
    store.dispatch(changeLongForInfoAction(res))
  })
  // plus房源
  getHomePlusData().then(res => {
    store.dispatch(changePlusInfoAction(res))
  })
})

export {
  fetchHomeDataAction
}
export default homeSlice.reducer