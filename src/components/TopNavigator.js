import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Affix, Icon, Button, Radio } from 'antd'

import { dispatch } from '../utils/dispatch'
import { isClient } from '../utils'
import Logo from './Logo'
import LoginButtons from './LoginButtons'

const CATEGORY = [
  {
    name: '详情预览',
    code: 'image',
    children: [
      { name: '全部', code: 0 },
      { name: '欧美', code: 1 },
      { name: '和风', code: 2 },
      { name: '大陆', code: 3 },
      { name: '耽美', code: 4 },
      { name: '次元', code: 5 }
    ]
  },

  {
    name: '文学鉴赏',
    code: 'novel',
    children: [{ name: '上线中', code: 0 }, { name: 'test', code: 1 }]
  },
  {
    name: '视频剖析',
    code: 'video',
    children: [{ name: '上线中', code: 0 }]
  }
]

@connect(({ app }) => app)
export default class TopNavigator extends Component {
  _handleClick = (childIndex, typeIndex, code) => {
    console.log('childIndex, typeIndex, code is ', childIndex, typeIndex, code)
    dispatch({ type: 'imageList/getImageList', payload: code })
  }
  render() {
    const { handleClick, typeIndex, childIndex, showCategory } = this.props
    return (
      <Affix>
        <header style={styles.topContainer}>
          <Logo containerStyle={{ display: 'inline' }} />
          {!isClient && showCategory
            ? <Radio.Group value={childIndex}>
                {CATEGORY[typeIndex].children.map(({ name, code }, index) => {
                  return (
                    <Radio.Button
                      value={index}
                      key={code}
                      onClick={() => this._handleClick(index, typeIndex, code)}
                    >
                      {name}
                    </Radio.Button>
                  )
                })}
              </Radio.Group>
            : null}
          <LoginButtons />
        </header>
      </Affix>
    )
  }
}
TopNavigator.defaultProps = {
  showCategory: true,
}
const styles = {
  topContainer: {
    background: 'rgb(190, 200, 200)',
    padding: '16px',
    display: 'flex',
    alignItems: 'center'
  }
}
