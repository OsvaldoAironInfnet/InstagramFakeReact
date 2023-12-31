import HomeRepository from "../data/home_repository";

class RecoveryStoriesUseCase {
    _homeRepository;
    constructor(homeRepository: HomeRepository) {
        this._homeRepository = homeRepository;
    }

    recoveryAllStories(onSuccess: (data: any) => void, onError: () => void) {
        this._homeRepository.recoveryAllStories(onSuccess, onError)
    }
}

export default RecoveryStoriesUseCase;