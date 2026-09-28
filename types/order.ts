import { SelectedDonut } from "./donut-box";

export type OrderType = "pickup" | "delivery";

export interface CustomerInfo {
    name: string;
    orderType: OrderType;
    note: string; 
}

export interface Order {
    boxSize: number;
    selectedDonuts: SelectedDonut[];
    customer: CustomerInfo;
    total: number;
}