import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "../reducers";
import INITIAL_STATE from "../reducers/initialState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

const middlewares = [];
middlewares.push(reduxImmutableStateInvariant());
const loggerMiddleware = createLogger({
	predicate: () => process.env.NODE_ENV === "development",
});
middlewares.push(loggerMiddleware);

export const store = createStore(
	rootReducer,
	INITIAL_STATE,
	composeEnhancers(applyMiddleware(...middlewares))
);

export default { store };
