export type ProductCategory = "classic" | "premium";

export interface Product {
    id: string;
    slug: string;
    name: string;
    category: ProductCategory;
    price: number;
    image: string;
    description: string;
    shortDescription: string;
    ingredients: string[];
    popular?: boolean; 
}