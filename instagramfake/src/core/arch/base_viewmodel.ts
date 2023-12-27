AppGlobalContext
import { useContext } from 'react';
import AppGlobalContext from '../contexts/app_context';

abstract class BaseViewModel {

    appContext;

    constructor() {
        this.appContext = useContext(AppGlobalContext);
    }

    showOrHideLoading(flag: boolean) {
        this.appContext?.saveAppContext({
            "showOrHideLoading": flag,
            "showOrHideToast": false
        })
    }

    showOrHideToast(flag: boolean) {
        this.appContext?.saveAppContext({
            "showOrHideToast": flag
        })
    }
}

export default BaseViewModel;