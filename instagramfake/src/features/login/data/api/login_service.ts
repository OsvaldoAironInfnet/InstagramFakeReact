import axios from "axios";
import BASE_URL from "../../../../core/config";


class LoginService {

    login_endpoint = "";

    constructor() {
        this.login_endpoint = BASE_URL + "/login";
    }

    callLogin(username: string, password: string, onSuccess: (data: any) => void, onError: () => void) {
        axios({
            method: 'post',
            url: this.login_endpoint,
            data: {
                userName: username,
                password: password
            }

        }).then(function (response) {
            onSuccess(response.data)
        }).catch(function (err){
            onError()
        });
    }
}

export default LoginService;