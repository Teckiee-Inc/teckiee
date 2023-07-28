import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const modalURL = process.env.MODALURL;

export const modalInfo = createAsyncThunk(
  "user/modalInfo",
  async modalInputData => {
    const { data } = await axios.post(`${modalURL}`, modalInputData);
    return data;
  }
);
const modalData = createSlice({
  name: "modalData",
  initialState: {
    modalStatus: "Idle",
    modalSuccessToken: "",
    contactUsModal: {
      active: false,
      nameInput: "",
      emailInput: "",
      projectInput: "",
    },
  },
  reducers: {
    contactModalHandler: state => {
      const toggle = !state.contactUsModal.active;
      state.contactUsModal.active = toggle;
    },
    nameInputHandler: (state, action) => {
      state.contactUsModal.nameInput = action.payload;
    },
    emailInputHandler: (state, action) => {
      state.contactUsModal.emailInput = action.payload;
    },
    projectInputHandler: (state, action) => {
      state.contactUsModal.projectInput = action.payload;
    },
    cleanUpHandler: state => {
      const name = state.contactUsModal.nameInput;
      const email = state.contactUsModal.emailInput;
      const project = state.contactUsModal.projectInput;

      if (name.length === 0 || email.length === 0 || project.length === 0) {
        alert("fuck off!");
        return;
      }
      state.contactUsModal = {
        active: false,
        nameInput: "",
        emailInput: "",
        projectInput: "",
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(modalInfo.pending, state => {
      state.modalStatus = "Loading...";
    });
    builder.addCase(modalInfo.fulfilled, (state, action) => {
      state.modalStatus = "Loaded...";
      state.modalSuccessToken = action.payload;
    });
    builder.addCase(modalInfo.rejected, state => {
      state.modalStatus = "Failed...";
    });
  },
});
export const {
  contactModalHandler,
  nameInputHandler,
  emailInputHandler,
  projectInputHandler,
  cleanUpHandler,
} = modalData.actions;
export default modalData.reducer;
