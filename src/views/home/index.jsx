import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'
import { isEmptyObject } from '@/utils/is-empty-object'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Home = memo(() => {
  const dispatch = useDispatch()
  const { 
    discountInfo, 
    recommendInfo, 
    goodPriceInfo, 
    highScoreInfo, 
    longforInfo,
    plusInfo
  } = useSelector(state => ({
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topOpacity: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        {/* 热门目的地 */}
        { isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} /> }

        {/* 精彩之地 */}
        { isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} /> }

        {/* 你可能想去 */}
        { isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} /> }

        {/* 高性价比房源 */}
        { isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} /> }

        {/* 高分好评房源 */}
        { isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} /> }

        {/* plus房源 */}
        { isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} /> }
      </div>
    </HomeWrapper>
  )
})

export default Home