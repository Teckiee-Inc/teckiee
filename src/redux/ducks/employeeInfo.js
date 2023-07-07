import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const employeeURL = process.env.EMPINFOURL;

export const empInfo = createAsyncThunk("user/empInfo", async () => {
  const { data } = await axios.get(`${employeeURL}`);
  return data;
}); // fetch employee info for about us page

const employeeData = createSlice({
  name: "EmployeeDataInfo",
  initialState: {
    loadStatus: "Idle",
    testStatus: "Idle",
    employeeData: [],
  },
  reducers: {
    test: state => {
      state.testStatus = "Loaded and working!";
    },
  },
  extraReducers: builder => {
    builder.addCase(empInfo.pending, state => {
      state.loadStatus = "Loading...";
    });
    builder.addCase(empInfo.fulfilled, (state, action) => {
      state.loadStatus = "Loaded...";
      state.employeeData = action.payload;
    });
    builder.addCase(empInfo.rejected, state => {
      state.loadStatus = "Failed...";
      state.employeeData = [];
    });
  },
});

export const { test } = employeeData.actions;
export default employeeData.reducer;
