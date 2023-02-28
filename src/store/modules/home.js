import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData } from "@/services"

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {}
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
    }
  }
})

// 同步action
const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction } = homeSlice.actions

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
})

export {
  fetchHomeDataAction
}
export default homeSlice.reducer