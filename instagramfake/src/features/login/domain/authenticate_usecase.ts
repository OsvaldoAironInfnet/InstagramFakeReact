import LoginRepository from "../data/login_repository";

class AuthenticateUseCase {
    _loginRepository;
    constructor(loginRepository: LoginRepository) {
        this._loginRepository = loginRepository;
    }

    authenticateUserLogin(username: string, password: string, onSuccess: (data: any) => void, onError: () => void) {
        this._loginRepository.authenticateUserLogin(username, password, onSuccess, onError)
    }
}

export default AuthenticateUseCase;