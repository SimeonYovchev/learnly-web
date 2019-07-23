import { TOGGLE_SIDEBAR_REQUEST, TOGGLE_SIDEBAR_SUCCESS } from '../constants';

export const toggleSidebarRequest = () => ({ type: TOGGLE_SIDEBAR_REQUEST });
export const toggleSidebarSuccess = (isOpen) => {
  return {
    type: TOGGLE_SIDEBAR_SUCCESS,
    payload: !isOpen,
  };
};

export const toggleSidebar = (openFlag) => {
  return (dispatch, getState) => {
    const { isOpen } = openFlag || getState().sidebarReducer;

    dispatch(toggleSidebarRequest());
    dispatch(toggleSidebarSuccess(isOpen));
  };
};
