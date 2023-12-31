import HomeRepository from "../data/home_repository";

class RecoveryFeedsUseCase {
    _homeRepository;
    constructor(homeRepository: HomeRepository) {
        this._homeRepository = homeRepository;
    }

    recoveryAllFeeds(onSuccess: (data: any) => void, onError: () => void) {
        this._homeRepository.recoveryAllFeeds(onSuccess, onError)
    }
}

export default RecoveryFeedsUseCase;