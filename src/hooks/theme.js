import { useContext } from "react";
import { AppContext } from "context/app";

export default function useTheme() {
  const {
    state: { theme },
    dispatch,
  } = useContext(AppContext);

  const switchTheme = (value) =>
    dispatch({
      type: "CHANGE_THEME",
      payload: value,
    });

  return { theme, switchTheme };
}
