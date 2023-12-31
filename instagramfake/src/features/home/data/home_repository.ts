import AppDataStorage from "../../../core/storage/app_storage_config";
import HomeService from "./api/home_service";

export default class HomeRepository {
    private _homeService;

    constructor(homeService: HomeService) {
        this._homeService = homeService;
    }

    recoveryAllStories(onSuccess: (data: any) => void, onError: () => void) {
        this._homeService.recoveryAllStories(onSuccess, onError)
    }

    recoveryAllFeeds(onSuccess: (data: any) => void, onError: () => void) {
        this._homeService.recoveryAllFeeds(onSuccess, onError)
    }
}