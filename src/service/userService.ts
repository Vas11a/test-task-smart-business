import { AxiosInstance, AxiosResponse } from 'axios';
import { User } from '../types';

export default class UserService {
    private api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    public async getUsers(): Promise<AxiosResponse<User[]>> {
        return this.api.get<User[]>('/users');
    }
}
