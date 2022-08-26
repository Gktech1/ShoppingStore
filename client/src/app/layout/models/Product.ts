export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    type: string;
    productTypeId?: number;
    brand: string;
    quantityInStock?: number;
}