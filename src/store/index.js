import { configureStore } from "@reduxjs/toolkit"
import mainReducer from "./modules/main"
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"

const store = configureStore({
  reducer: {
    // 通过 @reduxjs/toolkit 定义的
    main: mainReducer,
    home: homeReducer,
    // 通过普通的 redux 的方式定义的
    entire: entireReducer
  },
  // 是否开启浏览器redux devtools调试工具，默认值为ture
  devTools: true
})

export default store