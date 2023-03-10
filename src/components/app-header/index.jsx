import React, { memo, useRef, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  // 定义组件的状态，是搜索状态 还是 非搜索状态
  const [isSearch, setIsSearch] = useState(false)

  const { headerConfig } = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topOpacity } = headerConfig

  // 监听页面滚动 (滚动的距离大于30，header里面的搜索框消失)
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)
  if(!isSearch) prevY.current = scrollY
  // Math.abs：计算数字的绝对值
  if(isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)

  // 透明度的逻辑
  const isOpacity = topOpacity && scrollY === 0

  return (
    <ThemeProvider theme={{ isOpacity }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft />
            <HeaderCenter isSearch={isOpacity || isSearch} searchBarClick={() => setIsSearch(true)} />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isOpacity || isSearch} />
        </div>
        { isSearch && <div className='cover' onClick={() => setIsSearch(false)}></div> }
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader