
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AppStorageData {
    private _STORAGE_KEY = '@appdatastorage';
    private _storage

    constructor() {
        this._storage = new Storage({
            // maximum capacity, default 1000 key-ids
            size: 1000,
            storageBackend: AsyncStorage, // for web: window.localStorage
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
            sync: {}
        });
    }

    saveData(data: any) {
        try {
            this._storage.save({
                key: this._STORAGE_KEY,
                data: data,
            })
            console.log('data persist successful');
        } catch (error) {
            console.log('an error has ocurred to persist data');
        }
    }

    recoveryData(onSuccess: (data: any) => void) {
        try {
            this._storage.load({
                key: this._STORAGE_KEY,
                autoSync: true,
                syncInBackground: true
            }).then(recovery => {
                onSuccess(recovery)
            }).catch(error => {
                console.log('an error has ocurred to persist data');
            });
        } catch (error) {
            console.log('an error has ocurred to persist data');
        }
    }
}