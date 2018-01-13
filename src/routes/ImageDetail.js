import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImageDetail } from '../services/api';
import { IMAGE_URL } from '../utils/config';

export default class ImageDetail extends Component {
  state = {
    data: []
  };
  componentWillMount() {
    const { id } = this.props.match.params;
    getImageDetail(id).then(res => {
      const { data } = res
      console.log('getImageDetail data is ', data);
      this.setState({
        data
      });
    });
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const { data } = this.state;
    console.log('rende data is ', data)
    return (
      <section>
      <header></header>
      <div>
        {data.map((item, index) => {
          const { url, id, height, width } = item;
          return <img key={id} src={IMAGE_URL + url} style={{maxWidth: '2000px'}} />;
        })}
      </div>
      </section>
    );
  }
}
