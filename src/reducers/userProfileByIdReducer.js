import { GET_USER_PROFILE } from '../actionCreators/userProfile'
export const userProfileByIdReducer = (userProfile = {}, action) => {
  if (action.type === GET_USER_PROFILE) {
    return action.payload
  }

  if (action.type === 'CLEAR_USER_PROFILE') {
    return null
  }

  return userProfile
}
