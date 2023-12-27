import AppStorageData from "./app_storage"

export default class AppDataStorage {
    private static instance: AppStorageData

    private constructor() {}

    public static getInstance(): AppStorageData {
        if(!AppDataStorage.instance) {
            AppDataStorage.instance = new AppStorageData();
        }

        return AppDataStorage.instance;
    }
}