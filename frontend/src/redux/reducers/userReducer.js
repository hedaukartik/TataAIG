import INITIAL_STATE from "./initialState";
import { UserActionTypes } from "../types/userTypes";

export default function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case UserActionTypes.SET_USER:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
}
