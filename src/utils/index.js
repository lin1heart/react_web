import { notification } from 'antd'

import fetch from './fetch'

const toast = (msg) => {
    notification.info({
        description: msg,
        duration: 2,
        message: '咳咳',
    })
}

export {fetch, toast }