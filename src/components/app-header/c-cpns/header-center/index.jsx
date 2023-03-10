import React, { memo, useState } from 'react'
import Tabs from './c-cpns/tabs'
import SearchTabs from './c-cpns/search-tabs'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import { CenterWrapper } from './style'
import searchTitles from '@/assets/data/search_titles.json'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props
  const [tabIndex, setTabIndex] = useState(0)
  const titles = searchTitles.map(item => item.title)

  const searchBarClickHandle = () => {
    searchBarClick && searchBarClick()
  }

  return (
    <CenterWrapper>
      {/* 隐藏是退出动画(in属性是false)，显示是进入动画(in属性是true) */}
      <CSSTransition in={!isSearch} classNames="bar" timeout={250} unmountOnExit={true}>
        <div className='search-bar' onClick={searchBarClickHandle}>
          <div className='text'>搜索房源和体验</div>
          <div className='icon'>
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition in={isSearch} classNames="detail" timeout={250} unmountOnExit={true}>
        <div className='search-detail'>
          <Tabs titles={titles} tabChange={setTabIndex} />
          <div className='infos'>
            <SearchTabs searchInfos={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter