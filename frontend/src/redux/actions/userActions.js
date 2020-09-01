import { UserActionTypes } from "../types/userTypes";

export const setUser = (user) => ({
	type: UserActionTypes.SET_USER,
	payload: user,
});
