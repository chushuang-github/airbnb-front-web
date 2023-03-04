import hyRequest from "../request";

// 高性价比房源
export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice"
  })
}

// 高分好评房源
export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore"
  })
}

// 热门目的地
export function getHomeDiscountData() {
  return hyRequest.get({
    url: "/home/discount"
  })
}

// 精彩之地
export function getHomeHotRecommendData() {
  return hyRequest.get({
    url: "/home/hotrecommenddest"
  })
}

// 你可能想去
export function getHomeLongForData() {
  return hyRequest.get({
    url: "/home/longfor"
  })
}