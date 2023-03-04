import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header'
import { LongforWrapper } from './style'

import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongfor = memo((props) => {
  const { infoData } = props
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='longfor-list'>
        <ScrollView>
          {
            infoData.list.map((item, index) => {
              return (
                <LongforItem itemData={item} key={index} />
              )
            })
          }
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor