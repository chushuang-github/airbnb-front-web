import { createSlice } from "@reduxjs/toolkit"

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      // header是否固定再顶部
      isFixed: false,
      // header是否有透明度
      topOpacity: false
    }
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

const { changeHeaderConfigAction } = mainSlice.actions

export {
  changeHeaderConfigAction
}

export default mainSlice.reducer