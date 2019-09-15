import React from "react";

export let state = {
  searchTerm: "ido",
  showsData: [],
  showId: "",
  changeSearchTerm: term => (state.searchTerm = term)
};

export const Context = React.createContext(state);
