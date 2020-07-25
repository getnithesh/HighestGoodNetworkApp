import { combineReducers } from "redux";
import { userProfileByIdReducer } from "./userProfileByIdReducer";
import { authReducer } from "./authReducer";
import { allUserProfilesReducer } from "./allUserProfilesReducer";
import { leaderboardDataReducer } from "./leaderboardDataReducer";
import { allProjectsReducer } from "./allProjectsReducer";
import { userProjectsReducer } from "./userProjectsReducer";
import { projectMembershipReducer } from "./projectMembershipReducer";
import { errorsReducer } from "./errorsReducer";
import { timeEntriesReducer } from "./timeEntriesReducer";

export default combineReducers({
  auth: authReducer,
  userProfile: userProfileByIdReducer,
  allUserProfiles: allUserProfilesReducer,
  // userTeamMembers: userTeamMembersReducer,
  // userProjectMembers: userProjectMembersReducer,
  // dashboardData: dashboardDataReducer,
  leaderBoardData: leaderboardDataReducer,
  // weeklyDashboardData: weeklyDashboardDataReducer,
  // monthlyDashboardData: monthlyDashboardDataReducer,
  //	actionItems: actionItemsReducer,
  //	notifications: notificationsReducer,
  allProjects: allProjectsReducer,
  // project: projectByIdReducer,
  userProjects: userProjectsReducer,
  projectMembers: projectMembershipReducer,
  // allTeams: allTeamsReducer,
  // team: teamByIdReducer,
  // teamMembers: teamMembershipReducer,
  // allTimeEntries: allTimeEntriesReducer,
  // userTimeEntries: timeEntriesForSpecifiedPeriodReducer,
  // projectTimeEntries: timeEntriesForSpecifiedProjectReducer,
  // requestStatus: handleSuccessReducer,
  errors: errorsReducer,
  timeEntries: timeEntriesReducer
});
