import axios from 'axios'
import { Message } from 'element-ui'

const URL_PREFIX = 'http://120.27.3.205/rest'
// const URL_PREFIX = 'http://172.16.52.63/rest'

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
              // 'X-AUTH-TOKEN': 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxODczNDU2Nzg5MCIsInN1YiI6IjE4NzM0NTY3ODkwIiwiaWF0IjoxNTQ3NTM5NzAyfQ.eh15RTGh_z48-KH1goGbAheoXCb6kk1gCofJZy8783M',
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
