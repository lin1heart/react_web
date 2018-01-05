import React, { Component } from 'react';
import { connect } from 'react-redux';


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
      UploadImage
      </div>
    );
  }
}

UploadImage.propTypes = {
};