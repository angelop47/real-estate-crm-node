export interface Client {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    type: 'buyer' | 'seller' | 'tenant' | 'landlord' | 'investor';
    status: 'new' | 'active' | 'closed' | 'inactive';
    budgetMin?: number;
    budgetMax?: number;
    notes?: string;
    assignedAgentId?: string; // Reference to User.id
    createdAt: Date;
    updatedAt: Date;
}
