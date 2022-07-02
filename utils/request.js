// import axios from 'axios'

// const request = axios.create({
//   baseURL: 'http://localhost:5555',
//   timeout: 5000,
// })

// export default request

export const baseURL = 'http://192.168.0.105:5555'

export default function (options) {
  return new Promise((resolve, reject) => {
    uni.request({
      timeout: 5000,
      ...options,
      url: `${baseURL}${options.url}`,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
    })
  })
}