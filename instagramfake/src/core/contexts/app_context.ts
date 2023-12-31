import { createContext, useState } from "react";
import { Storie } from "../../features/home/presentation/components/stories";

type AppContext = {
    showOrHideLoading: boolean | null,
    showOrHideToast: boolean | null,
    storiesHome: Storie[] | null
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