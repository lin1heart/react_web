import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';

import NextBtn from '../components/NextBtn';
import ImageList from './ImageList';
import { dispatch } from '../utils/dispatch';

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
];
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@connect(({ imageList }) => imageList)
export default class Category extends Component {
  componentWillMount() {}
  componentDidMount() {
    dispatch({ type: 'imageList/effect' });
    console.log('Category props is ',this.props);
    
  }
  componentWillUnmount() {}
  _toNextPage = e => {
    dispatch({ type: 'imageList/effect' });
  };
  _handleClick = (e) => {
    console.log('e is ', e);
    const {keyPath  } =e 
    const childCode = keyPath[0]
    const type = childCode.split('/')[1]
    dispatch({ type: 'imageList/getImageList',  payload: type })
  }
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <LeftNavigator handleClick={this._handleClick}/>
        <div style={{ display: 'inline-flex' }}>
          <ImageList />
        </div>
        <NextBtn onClick={this._toNextPage} />
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
      defaultSelectedKeys={['image/0']}
      defaultOpenKeys={['image']}
      mode="inline"
    >
      {CATEGORY.map(({ code, name, children }) => {
        return (
          <SubMenu
            key={code}
            title={
              <span>
                <Icon type="mail" />
                <span>name</span>
              </span>
            }
          >
            {children.map(({ name, code: code1 }, index) => {
              return <Menu.Item key={code +'/'+ code1}>{name}</Menu.Item>;
            })}
          </SubMenu>
        );
      })}
    </Menu>
  );
};

const styles = {
  inine: {
    width: 1
  }
};
