import BaseViewModel from "../../../core/arch/base_viewmodel";
import { SCREEN_ROUTER_LOGIN } from "../../../core/config";
import CreateAccountUseCase from "../domain/create_account_usecase";

class SignUpViewModel extends BaseViewModel {

    _navigation;
    _createAccountUseCase;
    constructor(createAccountUseCase: CreateAccountUseCase, navigation: any) {
        super();
        this._navigation = navigation;
        this._createAccountUseCase = createAccountUseCase;
    }

    createAccount(name: string, email: string, username: string, password: string) {
        this.showOrHideLoading(true)
        this._createAccountUseCase.createAccountUser(name, email, username, password, (data) => {
            this.showOrHideLoading(false);
            this.showOrHideToast(true);
            this.navigateToLogin();
        }, () => {
            this.showOrHideLoading(false);
        })
    }

    navigateToLogin() {
        this._navigation.navigate(SCREEN_ROUTER_LOGIN)
    }
}

export default SignUpViewModel;