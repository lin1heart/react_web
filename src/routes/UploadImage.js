import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toast } from '../utils'
import { uploadImage } from '../services/api'
import { IMAGE_URL, SERVER_URL, UPLOAD_URL } from '../utils/config.js'

export default class UploadImage extends Component {
  state = {
    path: '',
    images: []
  }
  uploadPic = () => {
    const { files, form } = this
    let formData = new FormData(form)
    // const fileData = files.files;
    // for (let i = 0; i < fileData.length; i++) {
    //   const file = fileData[i];
    //   formData.append('images', file);
    // }
    const title = formData.get('title')
    const images = formData.get('images')
    if (!title) {
      toast.error('请输入标题')
      return
    }
    if (images.size === 0) {
      toast.error('请选择文件')
      return
    }
    uploadImage(formData)
  }
  onChange = e => {
    const { files } = this.files
    const _this = this
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader()
      reader.readAsDataURL(files[i])
      reader.onload = function(e, t) {
        const { images: originImages } = _this.state
        originImages[i] = this.result
        _this.setState({ images: [...originImages] })
      }
    }
  }
  onLoad = e => {}
  render() {
    const { images } = this.state
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
            onLoad={this.onLoad}
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
        <PreView images={images} />
      </div>
    )
  }
}
const PreView = props => {
  const { images } = props
  return (
    <section>
      {images.map((item, index) => {
        return <img src={item} key={index} style={styles.imageItem} />
      })}
    </section>
  )
}

UploadImage.propTypes = {}
const styles = {
  imageItem: {
    width: 100,
    height: 100,
  }
}
