import INITIAL_STATE from "./initialState";
import { UserActionTypes } from "../types/userTypes";

export default function userReducer(state = INITIAL_STATE.user, action) {
	switch (action.type) {
		case UserActionTypes.SET_USER:
			return {
				...state,
				...action.payload,
			};
		case UserActionTypes.REMOVE_USER:
			return null;
		default:
			return state;
	}
}
