/***********  SIGNUP  ***********/

export interface ILoginRequest {
    emailAddress: string;
    password: string;
}

export interface ILoginResponse {
    accessToken: string;
}
