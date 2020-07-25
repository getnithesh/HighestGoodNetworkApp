import httpService from "../services/httpService";
import { ENDPOINTS } from "../utils/URL";
import { getLeaderBoardData as getLeaderBoardDataActionCreator } from "../constants/leaderBoardData";

export const getLeaderboardData = userId => async dispatch => {
  const url = ENDPOINTS.LEADER_BOARD(userId);
  const res = await httpService.get(url);

  await dispatch(getLeaderBoardDataActionCreator(res.data));
};
