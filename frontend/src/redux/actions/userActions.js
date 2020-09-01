import { UserActionTypes } from "../types/userTypes";

export const setUser = (user) => ({
	type: UserActionTypes.SET_USER,
	payload: user,
});

export const removeUser = () => {
	return { type: UserActionTypes.REMOVE_USER };
};
