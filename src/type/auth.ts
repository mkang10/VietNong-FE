// types.ts
export interface LoginRequest {
    username: string;
    password: string;
}

export interface Account {
    userId: number;
    username: string;
    email: string;
    roleId: number;
}

export interface LoginResponse {
    isBanned: boolean;
    bannedAccountId: number;
    code: number;
    message: string;
    data: {
        token: string;
        account: Account;
    };
}