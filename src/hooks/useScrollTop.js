import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function useScrollTop() {
  // 页面路径发生变化，页面滚动到顶部 (路由跳转的时候，页面总是滚动到顶部)
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
}