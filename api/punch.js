import request from '@/utils/request.js'

export function getPunches(data = {}) {
  return request({
    method: 'GET',
    url: '/punches',
    data,
  })
}

export function createPunch(data) {
  return request({
    method: 'POST',
    url: '/punches',
    data,
  })
}