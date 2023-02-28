import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getHomeGoodPriceData } from "@/services"

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})

// 同步action
const { changeGoodPriceInfoAction } = homeSlice.actions

// 异步action
const fetchHomeDataAction = createAsyncThunk("fetchData", async (_, state) => {
  const res = await getHomeGoodPriceData()
  state.dispatch(changeGoodPriceInfoAction(res))
})

export {
  fetchHomeDataAction
}
export default homeSlice.reducer