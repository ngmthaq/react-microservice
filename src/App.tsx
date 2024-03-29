import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./configs/router";
import { AppLoading } from "./common/components/Generics";
import { useHandleSnackbar } from "./common/providers/NotistackProvider";
import { AppContext, AppContextType } from "./AppContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./theme/scss/index.scss";

function App() {
  useHandleSnackbar();

  const appContextValue: AppContextType = {};

  return (
    <AppContext.Provider value={appContextValue}>
      <AppLoading />
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
