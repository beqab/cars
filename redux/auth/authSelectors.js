import { createSelector } from "reselect";

const selectUser = (state) => state.auth;

export const userSelector = createSelector([selectUser], (auth) => auth.user);

export const isAuthSelector = createSelector(
  [selectUser],
  (auth) => auth.isAuth
);
