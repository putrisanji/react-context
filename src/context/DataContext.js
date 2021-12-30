import React, { createContext, useReducer } from "react";
import { ListReducer } from "../reducers/ListReducer";

export const DataContext = createContext();

const initialState = [
  {
    id: 1,
    title: "this is title one",
  },
  {
    id: 2,
    title: "this is title two",
  },
  {
    id: 3,
    title: "this is title three",
  }
];

export const DataProvider = (props) => {
  const [lists, dispatch] = useReducer(ListReducer, initialState);
  
  return <DataContext.Provider value={{lists,dispatch}}
  >{props.children}</DataContext.Provider>;
};
 