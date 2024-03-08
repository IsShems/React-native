import { ProductInCart } from "../types/ProductInCart";

export type Settings = {
  email: string;
  cardDetails: {
    cardNumber: string;
    cardHolder: string;
    expirationDate: string;
    cvc: string;
  };
  deliveryAddress: string;
  nonContactDelivery: boolean;
  cart?: ProductInCart[]; 
};
