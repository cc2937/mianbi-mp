import { baseURL } from '@/utils/request.js'

export function upload(filePath) {
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: `${baseURL}/upload`,
      filePath,
      name: 'file',
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
    })
  })
}