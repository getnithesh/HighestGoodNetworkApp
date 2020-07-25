/* eslint-disable prefer-destructuring */
/** *******************************************************************************
 * Action: PROJECTS
 * Author: Henry Ng - 01/17/20
 ******************************************************************************* */
import axios from "axios";
import * as types from "../constants/projects";
import { ENDPOINTS } from "../utils/URL";

/** *****************************************
 * PLAIN OBJECT ACTIONS
 ****************************************** */

/**
 * Set a flag that fetching projects
 */
export const setProjectsStart = () => ({
  type: types.FETCH_PROJECTS_START
});

/**
 * set Projects in store
 * @param payload : projects []
 */
export const setProjects = payload => ({
  type: types.RECEIVE_PROJECTS,
  payload
});

/**
 * Error when setting project
 * @param payload : error status code
 */
export const setProjectsError = payload => ({
  type: types.FETCH_PROJECTS_ERROR,
  payload
});

export const addNewProject = (payload, status) => ({
  type: types.ADD_NEW_PROJECT,
  payload,
  status
});

export const removeProject = (projectId, status) => ({
  type: types.DELETE_PROJECT,
  projectId,
  status
});

export const updateProject = (projectId, projectName, isActive, status) => ({
  type: types.UPDATE_PROJECT,
  projectId,
  projectName,
  isActive,
  status
});

/** *****************************************
 * ACTION CREATORS
 ****************************************** */

/**
 * Call API to get all projects
 */
export const fetchAllProjects = () => {
  const request = axios.get(ENDPOINTS.PROJECTS);

  return async dispatch => {
    await dispatch(setProjectsStart());
    request
      .then(res => {
        dispatch(setProjects(res.data));
      })
      .catch(() => {
        dispatch(setProjectsError());
      });
  };
};

/**
 * Post new project to DB
 * @param {projectName}: name of new project
 * @param {isActive}: the active status of new project
 */
export const postNewProject = (projectName, isActive) => {
  const url = ENDPOINTS.PROJECTS;

  return async dispatch => {
    let status = 200;
    let id = null;

    try {
      const res = await axios.post(url, { projectName, isActive });
      // eslint-disable-next-line no-underscore-dangle
      id = res.data._id;
      status = res.status;
    } catch (err) {
      status = 400;
    }

    dispatch(
      addNewProject(
        {
          id,
          projectName,
          isActive
        },
        status
      )
    );
  };
};

/**
 * Post new project to DB
 * @param {projectId}: Id of deleted project
 */
export const deleteProject = projectId => {
  const url = ENDPOINTS.PROJECT + projectId;

  return async dispatch => {
    let status = 200;

    try {
      const res = await axios.delete(url);
      status = res.status;
    } catch (err) {
      status = 400;
    }

    dispatch(removeProject(projectId, status));
  };
};

export const modifyProject = (type, projectId, projectName, isActive) => {
  const url = ENDPOINTS.PROJECT + projectId;
  const active = type === "setActive" ? !isActive : isActive;

  return async dispatch => {
    let status = 200;
    try {
      const res = await axios.put(url, {
        projectName,
        active
      });
      status = res.status;
    } catch (err) {
      status = 400;
    }

    dispatch(updateProject(projectId, projectName, isActive, status));
  };
};
