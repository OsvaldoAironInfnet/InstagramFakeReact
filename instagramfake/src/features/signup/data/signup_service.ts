import axios from "axios";
import BASE_URL from "../../../core/config";


class SignUpService {

    signup_endpoint = "";

    constructor() {
        this.signup_endpoint = BASE_URL + "/signup";
    }

    callSignup(name: string, email: string, username: string, password: string, onSuccess: (data: any) => void, onError: () => void) {
        axios({
            method: 'post',
            url: this.signup_endpoint,
            data: {
                username: username,
                password: password,
                email: email,
                name: name
            }

        }).then(function (response) {
            onSuccess(response.data)
        }).catch(function (err) {
            onError()
        });
    }
}

export default SignUpService;