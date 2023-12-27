import { SCREEN_ROUTER_HOME, SCREEN_ROUTER_SIGNUP } from "../../../core/config/";
import AuthenticateUseCase from "../domain/authenticate_usecase";
import BaseViewModel from "../../../core/arch/base_viewmodel";
import SaveDataLoginUseCase from "../domain/save_data_login_usecase";

class LoginViewModel extends BaseViewModel {
    private _navigation;
    private _authenticateUseCase;
    private _saveDataLoginUseCase;

    constructor(authenticateUseCase: AuthenticateUseCase, saveDataLoginUseCase: SaveDataLoginUseCase, navigation: any) {
        super();
        this._authenticateUseCase = authenticateUseCase;
        this._navigation = navigation;
        this._saveDataLoginUseCase = saveDataLoginUseCase;
    }

    navigateToSignUpScreen() {
        this._navigation.navigate(SCREEN_ROUTER_SIGNUP)
    }

    sendLogin(username: string, password: string) {
        this.showOrHideLoading(true)
        this._authenticateUseCase.authenticateUserLogin(username, password, (data) => {
            this.showOrHideLoading(false)
            this.navigateToHomeApp(data)
        }, () => {
            this.showOrHideLoading(false)

        })
    }


    private navigateToHomeApp(data: any) {
        if (data.bearerToken !== null) {
            this.appContext?.saveAppContext({
                "showOrHideLoading": false,
                "showOrHideToast": false
            })


            this._saveDataLoginUseCase.saveDataLoginUser(data.bearerToken, () => {
                this._navigation.navigate(SCREEN_ROUTER_HOME);
            })

        }
    }
}

export default LoginViewModel;