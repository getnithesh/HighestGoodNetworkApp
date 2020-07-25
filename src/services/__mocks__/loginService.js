let getCurrentUserResult;
const getCurrentUseroptions = {
  userPresent: { foo: "bar", baz: "masklsd" },
  userNotPresent: null,
  headerTest: {
    name: "Foobar",
    profilePic: undefined,
    userId: "5be0952c633dae0016081b4b"
  }
};

export function getCurrentUser() {
  return getCurrentUserResult;
}

export function login() {
  return "Success";
}

getCurrentUser.__setValue = option => {
  getCurrentUserResult = getCurrentUseroptions[option];
};
