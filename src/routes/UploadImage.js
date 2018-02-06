import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toast } from '../utils'
import 'antd/dist/antd.css';
import { IMAGE_URL, SERVER_URL, UPLOAD_URL } from '../utils/config.js';

export default class UploadImage extends Component {
  state = {
    path: ''
  };
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  handleChange = event => {
    console.log('event.target.value is ', event.target.value, event);
  };
  handleFileChange = e => {
    console.log('file change is ', e.target.value, e);
  };

  uploadPic = () => {
    const { form, files } = this;
    let formData = new FormData(form);
    // const fileData = files.files;
    // for (let i = 0; i < fileData.length; i++) {
    //   const file = fileData[i];
    //   formData.append('images', file);
    // }
    console.log('title is ', formData.get('title'));
    console.log('images is ', formData.get('images'));
    fetch(UPLOAD_URL + 'image/upload', {
      method: 'post',
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        console.log('res is ', res);
        toast('上传成功')
      })
      .catch(e => {
        console.log('upload with error', e);
      });
  };
  onChange = e => {
    console.log('onchange is ', e.target.value);
    this.setState({
      path: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form
          id="upload"
          ref={e => {
            this.form = e;
          }}
          encType="multipart/form-data"
          method="post"
        >
          <input
            type="text"
            name="title"
          />
          <input
            type="file"
            ref={e => {
              this.files = e;
            }}
            name="images"
            id="pic"
            onChange={this.onChange}
            multiple="multiple"
          />
          <input type="button" value="提交" onClick={this.uploadPic} />
          <span className="showUrl" />
          <img
            src=""
            className="showPic"
            alt=""
            style={{ width: 100, height: 100, backgroundColor: 'red' }}
          />
        </form>
      </div>
    );
  }
}

UploadImage.propTypes = {};
