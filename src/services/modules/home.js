import hyRequest from "../request";

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice"
  })
}