import hyRequest from "../request";

// 房屋列表 (offset数据偏移量，size数据获取个数)
export function getEntireRoomList(offset = 0, size = 20) {
  return hyRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}