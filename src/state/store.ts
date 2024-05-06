import { configureStore } from "@reduxjs/toolkit";
import searchJobsReducer from "../features/searchJobs/searchJobs.slice";

export const store = configureStore({
  reducer: {
    searchJobs: searchJobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
