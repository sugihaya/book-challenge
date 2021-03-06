import { createSelector} from "reselect";

const usersSelector = (state) => state.users;

export const getIsSignedIn = createSelector(
    [usersSelector],
    state => state.isSignedIn
)

export const getUsername = createSelector(
    [usersSelector],
    state => state.username
);

export const getUserId = createSelector(
    [usersSelector],
    state => state.uid
);

export const getIcon = createSelector(
    [usersSelector],
    state => state.icon
)

export const getProfile = createSelector(
    [usersSelector],
    state => state.profile
)