import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
import employeeInfoReducer from "./ducks/employeeInfo";
import menuInfoReducer from "./ducks/menu";
import modalReducer from "./ducks/modals";
import hpReducer from "./ducks/homePageContent";
import quotesReducer from "./ducks/quotes";

const store = configureStore({
  reducer: {
    employeeState: employeeInfoReducer,
    menu: menuInfoReducer,
    modal: modalReducer,
    hp: hpReducer,
    quotes: quotesReducer,
  },
});

export default store;
