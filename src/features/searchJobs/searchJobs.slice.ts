import { createSlice } from "@reduxjs/toolkit";

export interface Job {
  jdUid: string | null;
  jdLink: string | null;
  jobDetailsFromCompany: string | null;
  maxJdSalary: string | null;
  minJdSalary: number | null;
  salaryCurrencyCode: string | null;
  location: string | null;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string | null;
  companyName: string | null;
  logoUrl: string | null;
}

export interface SearchJobsState {
  jobsList: Job[];
  isLoading: boolean;
}

const initialState: SearchJobsState = {
  jobsList: [],
  isLoading: false,
};

export const searchJobsSlice = createSlice({
  name: "searchJobs",
  initialState,
  reducers: {
    setJobsList: (state, action) => {
      state.jobsList = [...state.jobsList, ...action.payload];
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setJobsList, setIsLoading } = searchJobsSlice.actions;

export default searchJobsSlice.reducer;
