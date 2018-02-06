import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toast } from '../utils'
import { uploadImage } from '../services/api'
import { IMAGE_URL, SERVER_URL, UPLOAD_URL } from '../utils/config.js'

export default class UploadImage extends Component {
  state = {
    path: ''
  }
  uploadPic = () => {
    const { form, files } = this
    let formData = new FormData(form)
    // const fileData = files.files;
    // for (let i = 0; i < fileData.length; i++) {
    //   const file = fileData[i];
    //   formData.append('images', file);
    // }
    console.log('title is ', formData.get('title'))
    console.log('images is ', formData.get('images'))
    uploadImage(formData)
  }
  onChange = e => {
    console.log('images onchange is ', e.target.value)
  }
  render() {
    return (
      <div>
        <form
          id="upload"
          ref={e => {
            this.form = e
          }}
          encType="multipart/form-data"
          method="post"
        >
          <input type="text" name="title" />
          <input
            type="file"
            ref={e => {
              this.files = e
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
    )
  }
}

UploadImage.propTypes = {}
