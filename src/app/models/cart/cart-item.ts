import { Item } from './../../../services/product.service';


export class CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export class Cart {
    items: Item[];
    total: number;
}