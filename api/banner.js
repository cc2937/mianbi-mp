import request from '@/utils/request.js'

export function getBanners(data = {}) {
  return request({
    method: 'GET',
    url: '/banners'
  })
}