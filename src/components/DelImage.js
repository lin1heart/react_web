import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Table, Icon, Divider, Button } from 'antd'

import { dispatch } from '../utils/dispatch'
import { StandardFormat } from '../utils'

const deleteImages = ids => {
  console.log('deleteimages ids is ', ids)
  dispatch({ type: 'admin/deleteImages', ids })
}
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: text =>
      <a>
        {text}
      </a>
  },
  {
    title: 'uploadDt',
    dataIndex: 'uploadDt',
    key: 'uploadDt',
    render: text =>
      <span>
        {StandardFormat(Number.parseFloat(text))}
      </span>
  },
  {
    title: 'headImage',
    dataIndex: 'headImage',
    key: 'headImage'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) =>
      <span>
        <a
          onClick={() => {
            console.log(text, record)
            deleteImages([text.id])
          }}
        >
          删除
        </a>
      </span>
  }
]

@connect(({ admin }) => admin)
export default class DelImage extends PureComponent {
  state = { selectImages: [] }
  queryData = () => {
    dispatch({ type: 'admin/getImageList' })
  }
  selectImages = (selectedRowKeys, selectedRows) => {
    this.setState({
      selectImages: selectedRows.map(({ id }) => id)
    })
  }
  render() {
    const { containerStyle, imageList } = this.props
    const { selectImages } = this.state
    return (
      <div>
        <Button onClick={this.queryData}>查询</Button>
        <Button onClick={() => deleteImages(selectImages)}>删除</Button>
        <Table
          rowSelection={{ onChange: this.selectImages }}
          columns={columns}
          dataSource={imageList.map(item => ({ ...item, key: item.uploadDt }))}
          pagination={false}
        />
      </div>
    )
  }
}
DelImage.defaultProps = {
  containerStyle: {}
}
DelImage.propTypes = {
  containerStyle: propTypes.object
}
const styles = {
  container: {
    marginRight: '16px'
  },
  flexContainer: {
    display: 'flex',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  item: {
    margin: '0 10px'
  }
}
