import { createContext, useState } from "react";

interface AppContext {
    "data": {}
}

type AppGlobalContextType = {
    appContext: AppContext;
    saveAppContext: (appContext: AppContext) => void;
}

const AppGlobalContext = createContext<AppGlobalContextType | null>(null);

export default AppGlobalContext;