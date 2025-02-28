export interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
}

export enum UserRole {
    Admin = 'ADMIN',
    User = 'USER',
    Moderator = 'MODERATOR'
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
}

export interface ApiResponse<T> {
    data: T;
    error?: string;
}

export type UserResponse = ApiResponse<User>;
export type UserRoleResponse = ApiResponse<UserRole>;
export type ProductResponse = ApiResponse<Product[]>;
