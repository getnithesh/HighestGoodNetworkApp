import React, { Component } from "react";
import Loading from "./common/Loading";
import { getUserProfile } from "../services/userProfileService";
import { getCurrentUser } from "../services/loginService";
import Profile from "./Profile";

class UserProfile extends Component {
  state = {
    requestorRole: "",
    requestorId: "",
    isLoading: true,
    userProfile: {},
    targetUserId: ""
  };

  async componentDidMount() {
    try {
      let { userid: requestorId, role: requestorRole } = {
        ...getCurrentUser()
      };
      let { userId: targetUserId } = this.props.match.params;
      let { data: userProfile } = { ...(await getUserProfile(targetUserId)) };
      let isLoading = false;
      this.setState({ requestorId, requestorRole, isLoading, userProfile, targetUserId });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("This is an invalid profile");
      }
    }
  }

  render() {
    if (this.state.isLoading === true) {
      return <Loading />;
    }

    let { requestorId, requestorRole, userProfile, targetUserId } = this.state;

    return (
      <Profile
        requestorId={requestorId}
        requestorRole={requestorRole}
        userProfile={userProfile}
        targetUserId={targetUserId}
      />
    );
  }
}

export default UserProfile;