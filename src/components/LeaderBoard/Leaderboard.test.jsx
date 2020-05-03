import React from "react";
import { shallow } from "enzyme";
import { Login } from "./Leaderboard";

describe("Leaderboard form", () => {
  const props = {
    auth: [{ isAuthenticated: false }]
  }
  const wrapper = shallow(<Leaderboard {...props} />)
  it('the Leaderboard table is shown', () => {

  });
  it('the Leaderboard isnt empty', () => {

  });
  it('the Leaderboard shows your name', () => {

  });
  it('the Leaderboard shows tangible hours with the correct colors', () => {

  });
  it('the Leaderboard shows intangible hours', () => {

  });
  it('the Leaderboard shows progress bar correctly', () => {

  });
  it('the Leaderboard autoupdates after changes', () => {

  });

});
