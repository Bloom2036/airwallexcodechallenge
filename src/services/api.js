import request from 'commons/request'

export function emailInvitations(data) {
    return request({
        url: '/prod/fake-auth',
        data,
        method: 'post'
    })
}
