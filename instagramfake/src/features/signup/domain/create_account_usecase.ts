import SignUpService from "../data/signup_service";

class CreateAccountUseCase {

    _service;
    constructor(service: SignUpService) {
        this._service = service;
    }


    createAccountUser(name: string, email: string, username: string, password: string, onSuccess: (data: any) => void, onError: () => void) {
        this._service.callSignup(name, email, username, password, onSuccess, onError);
    }
}

export default CreateAccountUseCase;