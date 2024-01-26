export interface UserPayload {
    sub: number;
    iat?: number;
    exp?: number;
    email: string;
    name: string;
    document: string;
}