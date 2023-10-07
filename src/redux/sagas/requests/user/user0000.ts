import axios from 'axios'

export function requestGetUser0000(username: string) {
  return axios.get(`https://petstore3.swagger.io/api/v3/user/${username}`)
}

// export default function requestGetUser0000(username: string) {
//   return axios.request({
//     method: 'get',
//     url: `https://petstore3.swagger.io/api/v3/user/${username}`,
//   })
// }
