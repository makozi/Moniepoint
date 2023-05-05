import { createContext, useReducer } from "react";
import { node } from "prop-types";
import { themes } from "styles/theme/themes";

const AppContext = createContext("");

const initialState = {
  theme: themes.light,
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: themes[action.payload],
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

AppContextProvider.propTypes = {
  children: node.isRequired,
};

export { AppContext, AppContextProvider };
