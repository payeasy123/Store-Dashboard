import { axiosInstance } from "@/libs/axios";
import { IBaseApiResponse } from "../types";
import { ILoginRequest, ILoginResponse } from "./auth.interface";

class AuthService {
    constructor() {}

    public async login(data: ILoginRequest): Promise<IBaseApiResponse<ILoginResponse>> {
        return await axiosInstance.post(`/auth/login`, data);
    }

    public async logout() {
        return await axiosInstance.get(`/auth/logout`);
    }
}

export const authService = new AuthService();
