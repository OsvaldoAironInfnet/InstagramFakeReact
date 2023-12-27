import LoginRepository from "../data/login_repository";

export default class SaveDataLoginUseCase {
    _loginRepository;
    constructor(loginRepository: LoginRepository) {
        this._loginRepository = loginRepository;
    }

    saveDataLoginUser(bearerToken: string, onSuccess: () => void) {
        this._loginRepository.saveDataLogin(bearerToken,onSuccess)
    }
}