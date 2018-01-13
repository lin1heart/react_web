import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';

import NextBtn from '../components/NextBtn'
import ImageList from './ImageList'
import { dispatch } from '../utils/dispatch'

const IAMGE_TYPES = [
  { name: '全部', type: 0 },
  {
    name: '欧美',
    type: 1
  },
  { name: '和风', type: 2 },
  { name: '大陆', type: 3 },
  { name: '耽美', type: 4 },
  { name: '次元', type: 5 },
];
const NOVEL_TYPES = [{ name: '上线中', type: 0 }, { name: 'test', type: 1 }];
const VIDEO_TYPES = [
  {
    name: '上线中',
    type: 0
  }
];

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@connect(({ imageList }) => imageList)
export default class Category extends Component {
  componentWillMount() {}
  componentDidMount() {
    dispatch({ type: 'imageList/effect'})
  }
  componentWillUnmount() {}
  _toNextPage = e => {
    dispatch({ type: 'imageList/effect'})
  };
  render() {
    return (
      <div style={{display: 'flex'}}>
        <LeftNavigator />
        <div style={{ display: 'inline-flex' }}>
        <ImageList/>
        </div>
        <NextBtn onClick={this._toNextPage}/>
      </div>
    );
  }
}
const LeftNavigator = props => {
  const { handleClick } = props;
  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['0']}
      defaultOpenKeys={['image']}
      mode="inline"
    >
      <SubMenu
        key="image"
        title={
          <span>
            <Icon type="mail" />
            <span>详情预览</span>
          </span>
        }
      >
        {IAMGE_TYPES.map(({ name, type }, index) => {
          return <Menu.Item key={name + index}>{name}</Menu.Item>;
        })}
      </SubMenu>
      <SubMenu
        key="novel"
        title={
          <span>
            <Icon type="mail" />
            <span>文学鉴赏</span>
          </span>
        }
      >
        {NOVEL_TYPES.map(({ name, type }, index) => {
          return <Menu.Item key={name + index}>{name}</Menu.Item>;
        })}
      </SubMenu>
      <SubMenu
        key="video"
        title={
          <span>
            <Icon type="mail" />
            <span>视频解析</span>
          </span>
        }
      >
        {VIDEO_TYPES.map(({ name, type }, index) => {
          return <Menu.Item key={name + index}>{name}</Menu.Item>;
        })}
      </SubMenu>
    </Menu>
  );
};

const styles = {
    inine: {
        width: 1,
    }
}