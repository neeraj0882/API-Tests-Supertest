import utils from './utils.js'
import supertest from 'supertest-as-promised'

const DEFAULT_TIMEOUT = 5000
const DEFAULT_HEADERS = {}

let request = (() => {

  const timeout = utils.get('http.timeout', DEFAULT_TIMEOUT)

  return requestConfig => {

    let _request = supertest(utils.get('http.base-url'))
    let _url = requestConfig.url
    let _method = (requestConfig.method || 'get').toLowerCase()
    let _data = requestConfig.data


    switch (_method) {
      case 'get':
        _request = _request.get(_url)
        break
      case 'post':
        _request = _request.post(_url)
        break
      // case 'put':
      //   _request = _request.put(_url)
      //   break
      // case 'delete':
      //   _request = _request.delete(_url)
      //   break
      default:
        throw new Error(`Unkown http method: ${requestConfig.method}`)
    }

    // if (_data) {
    //   if (!(_data instanceof String)) {
    //     _data = JSON.stringify(_data)
    //   }
    //   _request.send(_data)
    // }

    return _request
  }
})()

let get = (url, headers={}) => request({
  method: 'get',
  url,
  headers
})

let post = (url, data, headers={}) => request({
  method: 'post',
  url,
  data,
  headers
})

// let put = (url, data, headers={}) => request({
//   method: 'put',
//   url,
//   data,
//   headers
// })

// let del = (url, headers={}) => request({
//   method: 'delete',
//   url,
//   headers
// })

export default Object.freeze({
  request,
  get,
  post,
  //put,
  //'delete': del
})