import request from '@/utils/request.js'

export function getCourses(data = {}) {
  return request({
    method: 'GET',
    url: '/courses',
    data,
  })
}