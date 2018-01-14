import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Affix, Icon, Button, Radio } from 'antd';

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

@connect(({ app }) => app)
export default class Category extends Component {
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {
    console.log('willun');
  }
  _handleClick = (childIndex, typeIndex, code) => {
    console.log('childIndex, typeIndex, code is ', childIndex, typeIndex, code);
    dispatch({ type: 'imageList/getImageList', payload: code });
  };
  render() {
    const { typeIndex, childIndex } = this.props;
    return (
      <section style={styles.section}>
        <Banner />
        <TopNavigator
          handleClick={this._handleClick}
          typeIndex={typeIndex}
          childIndex={childIndex}
        />
        <div style={styles.container}>
          <div style={{ display: 'inline-flex' }}>
            <ImageList />
          </div>
          <NextBtn onClick={this._toNextPage} />
        </div>
      </section>
    );
  }
}
const TopNavigator = props => {
  const { handleClick, typeIndex, childIndex } = props;
  return (
    <Affix>
      <div style={{ background: 'rgb(190, 200, 200)', padding: '16px' }}>
        <Radio.Group value={childIndex}>
          {CATEGORY[typeIndex].children.map(({ name, code }, index) => {
            return (
              <Radio.Button
                value={index}
                onClick={() => handleClick(index, typeIndex, code)}
              >
                {name}
              </Radio.Button>
            );
          })}
        </Radio.Group>
        <Button.Group style={{ float: 'right' }}>
          <Button>登陆</Button>
          <Button>注册</Button>
        </Button.Group>
      </div>
    </Affix>
  );
};
const Banner = () => {
  return (
    <div style={styles.flexContainer}>
      <h1 style={styles.imageTitle}>welcome to maldives holiday</h1>
      <h2 style={styles.imameSubTitle}>sail and sail</h2>
      <h3 style={styles.imageText}>你那边的世界需要拯救吗</h3>
    </div>
  );
};
const styles = {
  section: {
    width: '100%',
    height: '100%'
  },
  container: {
    display: 'flex',
    width: '70%',
    marginLeft: '15%',
    border: 'solid red 2px'
  },
  flexContainer: {
    display: 'flex',
    background: 'url("./maldives.jpg") no-repeat center ',
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  imageTitle: {
    display: 'inline-flex',
    color: '#fff',
    fontSize: '2.5rem'
  },
  imameSubTitle: {
    display: 'inline-flex',
    color: '#fff',
    marginTop: '1rem',
    fontSize: '2rem'
  },
  imageText: {
    color: '#fff',
    fontSize: '1rem',
    position: 'absolute',
    top: '1rem',
    left: '1rem',
  },
};
