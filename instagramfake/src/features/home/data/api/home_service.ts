import BASE_URL from "../../../../core/config";
import axios, { AxiosRequestTransformer } from "axios"

class HomeService {

    recovery_all_stories_endpoint = "";
    recovery_all_feeds_endpoint = "";

    constructor() {
        this.recovery_all_stories_endpoint = BASE_URL + "/stories";
        this.recovery_all_feeds_endpoint = BASE_URL + "/feeds"
    }

    recoveryAllStories(onSuccess: (data: any) => void, onError: () => void) {
        axios({
            method: 'get',
            url: this.recovery_all_stories_endpoint,
        }).then(function (response) {
            console.log(response.data.data);
            onSuccess(response.data.data)
        }).catch(function (err){
            onError()
        });
    }

    recoveryAllFeeds(onSuccess: (data: any) => void, onError: () => void) {
        axios({
            method: 'get',
            url: this.recovery_all_feeds_endpoint,
        }).then(function (response) {
            console.log(response.data.data);
            onSuccess(response.data.data)
        }).catch(function (err){
            onError()
        });
    }
}

export default HomeService;