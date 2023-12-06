
import { NativeBaseProvider } from "native-base";
import APP_THEME from "./src/design/theme";
import AppGlobalContext from "./src/core/contexts/app_context";
import Login from "./src/features/login/screen";
export default function App() {

  return (
    <NativeBaseProvider theme={APP_THEME}>
      <AppGlobalContext.Provider value={null}>

      <Login/>
      </AppGlobalContext.Provider>
    </NativeBaseProvider>
  );
}