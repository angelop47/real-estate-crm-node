export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    cityId: string;
    departmentId: string;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    images: string[];
}