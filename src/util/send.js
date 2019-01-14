import axios from 'axios'
import { Message } from 'element-ui'

const URL_PREFIX = 'http://116.62.171.244:8082/yingsu/rest'
// const URL_PREFIX = 'http://172.16.52.99:8083/yingsu/rest'

export function send (options) {
  const timestamp = Date.now()
  options.url = URL_PREFIX + options.name
  delete options.name
  return new Promise(function (resolve, reject) {
    switch (options.method) {
      case 'POST':
        axios.post(encodeURI(options.url), options.data,
          {
            headers: {
              // 'X-AUTH-TOKEN': getCookie('btwccy_cookie') || '',
              'X-Timestamp': timestamp
            }
          }
        ).then((res) => {
          resolve(res)
        }).catch((error) => {
          Message.error({
            message: 'Interface error!'
          })
          console.log(error)
          throw new Error('接口报错!')
        })
        break
      case 'GET':
        axios.get(encodeURI(options.url), {headers: {'X-Timestamp': timestamp}}
        ).then((res) => {
          resolve(res)
        }).catch((error) => {
          console.log(error)
          Message.error({
            message: 'Interface error!'
          })
        })
        break
      case 'DELETE':
        axios.delete(encodeURI(options.url), {headers: {'X-Timestamp': timestamp}}
        ).then((res) => {
          resolve(res)
        }).catch((error) => {
          console.log(error)
          Message.error({
            message: 'Interface error!'
          })
        })
        break
      case 'PUT':
        axios.put(encodeURI(options.url), {headers: {'X-Timestamp': timestamp}}
        ).then((res) => {
          resolve(res)
        }).catch((error) => {
          console.log(error)
          Message.error({
            message: 'Interface error!'
          })
        })
        break
    }
  })
}
