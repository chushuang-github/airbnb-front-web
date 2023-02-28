import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemClickHandle = (item, index) => {
    setCurrentIndex(index)
    tabClick(item, index)
  }

  return (
    <TabsWrapper>
      {
        tabNames.map((item, index) => {
          return (
            <div 
              className={classNames("item", { active: currentIndex === index })} 
              key={item} 
              onClick={() => itemClickHandle(item, index)}
            >
              { item }
            </div>
          )
        })
      }
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTabs