import httpService from "../services/httpService";
import { ENDPOINTS } from "../utils/URL";

export function getUserTeamMembers1(userId) {
  const request = httpService.get(ENDPOINTS.USER_TEAM(userId));

  return dispatch => {
    request.then(({ data }) => {
      dispatch({
        type: "GET_USER_TEAM_MEMBERS",
        payload: data
      });
    });
  };
}
