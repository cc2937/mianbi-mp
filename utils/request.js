// import axios from 'axios'

// const request = axios.create({
//   baseURL: 'http://localhost:5555',
//   timeout: 5000,
// })

// export default request

export default function (options) {
  return new Promise((resolve, reject) => {
    uni.request({
      timeout: 5000,
      ...options,
      url: `http://192.168.3.251:5555${options.url}`,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
    })
  })
}