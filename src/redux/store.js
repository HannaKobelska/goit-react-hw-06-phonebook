import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import contactsReducer from "./contacts/contactsSlice";

const reducer = {
  contacts: contactsReducer,
};


const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
  timestamp: false,
});


const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
export default store;