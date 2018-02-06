import { notification } from 'antd'

import fetch from './fetch'

const toast = (msg) => {
    notification.info({
        description: msg,
        duration: 2,
        message: '[smile]',
    })
}

export {fetch, toast }
