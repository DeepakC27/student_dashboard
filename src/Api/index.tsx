import axios from './apiInstance'

interface IApiResponse {
  status: number,
  data: {
    success: boolean,
    msg: string,
    data: object | Array<object>
  }
}

const getRequestAsync = (uri: string, body: object) => {
  return axios.get(uri, body).catch((err: object) => {
    throw err
  }).then((response: IApiResponse) => {
    if (response.status === 200 && response.data.success) {
      return response.data.data
    } else {
      let err = new Error('Something went wrong')
      throw err
    }
  })
}

const postRequestAsync = (uri: string, body: object) => {
  return axios.post(uri, body).catch((err: object) => {
    throw err
  }).then((response: IApiResponse) => {
    if (response.status === 200 && response.data.success) {
      return response.data.data
    } else {
      let err = new Error('Something went wrong')
      throw err
    }
  })
}

export {
  getRequestAsync,
  postRequestAsync
}