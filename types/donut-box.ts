export interface DonutBox {
    id: string;
    name: string;
    size: number;
    price: number;
    description: string;
}

export interface SelectedDonut {
    productId: string;
    quantity: number;
}