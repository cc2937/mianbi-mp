import request from '@/utils/request.js'

export function getPunches(data = {}) {
  return request({
    method: 'GET',
    url: '/punches',
    data,
  })
}