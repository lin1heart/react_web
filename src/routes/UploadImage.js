import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Upload, Button, Icon } from 'antd';

import 'antd/dist/antd.css'
import { IMAGE_URL, SERVER_URL, UPLOAD_URL } from '../utils/config.js'

const fileList = [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: IMAGE_URL + 't1.jpg',
    thumbUrl: IMAGE_URL + 't1.jpg',
  }, {
    uid: -2,
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }];
  
  const props = {
    action: UPLOAD_URL,
    listType: 'picture',
    defaultFileList: [...fileList],
  };
  
  const props2 = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    defaultFileList: [...fileList],
    className: 'upload-list-inline',
  };

  
export default class UploadImage extends Component {
  componentWillMount() {
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    const { imageList = [], ratioList } = this.props;
    return (
        <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> upload
          </Button>
        </Upload>
        <br />
        <br />
        <Upload {...props2}>
          <Button>
            <Icon type="upload" /> upload
          </Button>
        </Upload>
      </div>
    );
  }
}

UploadImage.propTypes = {
};