let getUserProfileResult;
const getUserProfileOptions = {
  userProfile: {
    name: "Foobar",
    profilePic: undefined,
    userId: "5be0952c633dae0016081b4b"
  }
};

export function getUserProfile() {
  return getUserProfileResult;
}

getUserProfile.__setValue = option => {
  getUserProfileResult = getUserProfileOptions[option];
};
