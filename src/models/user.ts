export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    role: 'admin' | 'agent';
    isActive: boolean;
    createdAt: Date;
}
