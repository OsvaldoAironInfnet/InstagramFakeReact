import { createContext, useState } from "react";

type AppContext = {
    showOrHideLoading: boolean | null,
    showOrHideToast: boolean | null,
}

type AppGlobalContextType = {
    appContext: AppContext | null;
    saveAppContext: (appContextData: AppContext) => void;
}

const AppGlobalContext = createContext<AppGlobalContextType>({
    appContext: null,
    saveAppContext: () => {},
});

export default AppGlobalContext;