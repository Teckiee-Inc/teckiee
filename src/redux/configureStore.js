import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
import employeeInfoReducer from "./ducks/employeeInfo";
import menuInfoReducer from "./ducks/menu";
import modalReducer from "./ducks/modals";
import hpReducer from "./ducks/homePageContent";

const store = configureStore({
  reducer: {
    employeeState: employeeInfoReducer,
    menu: menuInfoReducer,
    modal: modalReducer,
    hp: hpReducer,
  },
});

export default store;
