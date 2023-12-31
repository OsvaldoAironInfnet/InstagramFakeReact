import { SCREEN_ROUTER_HOME, SCREEN_ROUTER_SIGNUP } from "../../../core/config/";
import BaseViewModel from "../../../core/arch/base_viewmodel";
import RecoveryStoriesUseCase from "../domain/recovery_stories_usecase";
import { Storie } from "./components/stories";
import RecoveryFeedsUseCase from "../domain/recovery_feeds_usecase";
import { Feed } from "./components/feed";

class HomeViewModel extends BaseViewModel {
    private _navigation;
    private _recoveryStoriesUseCase;
    private _recoveryFeedsUseCase;


    constructor(recoveryStoriesUseCase: RecoveryStoriesUseCase, recoveryFeedsUseCase: RecoveryFeedsUseCase,navigation: any) {
        super();
        this._navigation = navigation;
        this._recoveryStoriesUseCase = recoveryStoriesUseCase;
        this._recoveryFeedsUseCase = recoveryFeedsUseCase
    }

    recoveryAllStories(onSuccess: (data: Storie[]) => void) {
        this._recoveryStoriesUseCase.recoveryAllStories((data) => {
        
            onSuccess(data)
        }, () => {});
    }

    recoveryAllFeeds(onSuccess: (data: Feed[]) => void) {
        this._recoveryFeedsUseCase.recoveryAllFeeds((data) => {
        
            onSuccess(data)
        }, () => {});
    }
}

export default HomeViewModel;