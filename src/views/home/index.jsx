import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  const dispatch = useDispatch()
  const { discountInfo, goodPriceInfo, highScoreInfo } = useSelector(state => ({
    discountInfo: state.home.discountInfo,
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }), shallowEqual)

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        {/* 热门目的地 */}
        <div className='discount'>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionRooms roomList={discountInfo?.dest_list?.['成都']} itemWidth="33.3333%" />
        </div>
        {/* 高性价比房源 */}
        <HomeSectionV1 infoData={goodPriceInfo} />
        {/* 高分好评房源 */}
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home