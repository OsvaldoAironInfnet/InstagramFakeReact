import AppDataStorage from "../../../core/storage/app_storage_config";
import LoginService from "./api/login_service";

export default class LoginRepository {

    private _loginService;
    private _appStorageData;

    constructor(loginService: LoginService) {
        this._loginService = loginService;
        this._appStorageData = AppDataStorage.getInstance();
    }

    authenticateUserLogin(username: string, password: string, onSuccess: (data: any) => void, onError: () => void) {
        this._loginService.callLogin(username, password, onSuccess, onError)
    }

    saveDataLogin(bearerToken: string, onSuccess: () => void) {
        try {
            this._appStorageData.saveData(bearerToken)
            onSuccess()
        } catch (error) {
            console.log('an error has ocurred to persist data');
        }
    }
}