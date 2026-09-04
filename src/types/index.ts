export const role = ['admin', 'user', 'super_admin'] as const
export type Role = typeof role[number]


export type User = {
    id: number,
    name: string,
    email: string,
    password_hash: string,
    age: number,
    role: Role,
    createdAt: Date,
    updatedAt: Date
}


export type RUser = Omit< User, 'id' | 'password_hash' | 'createdAt' | 'updatedAt'> 

export type Order = {
    id: number,
    customer_id: number,
    quantity: number,
    food: string,
    price: number,
    createdAt: Date,
    updatedAt: Date
}



