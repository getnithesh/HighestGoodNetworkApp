import { getUserProfile as getUserProfileActionCreator } from '../actionCreators/userProfile'
import { ENDPOINTS } from '../utils/URL'
import axios from 'axios'

export const getUserProfile = userId => {
  const url = ENDPOINTS.USER_PROFILE(userId)
  return async dispatch => {
    const res = await axios.get(url)

    await dispatch(getUserProfileActionCreator(res.data))

    // axios.get(url).then(({ data }) => {
    //   dispatch(getUserProfileActionCreator(data))
    // })
  }
}
