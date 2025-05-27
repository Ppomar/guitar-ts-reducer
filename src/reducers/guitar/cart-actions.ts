import { Guitar } from "../../types";

export enum Types {
    CART_ADD_TO_CART_DATA = "CART_ADD_TO_CART_DATA",
    CART_DECREASE_QUANTITY_DATA = "CART_DECREASE_QUANTITY_DATA",
    CART_CLEAR_CART_DATA = "CART_CLEAR_CART_DATA",
    CART_INCREASE_QUANTITY_DATA = "CART_INCREASE_QUANTITY_DATA",
    CART_REMOVE_FROM_CART_DATA = "CART_REMOVE_FROM_CART_DATA",
    CART_SET_GUITARS_DATA = "CART_SET_GUITARS_DATA"
};

export const addToCartData = (guitar: Guitar) => ({
    type: Types.CART_ADD_TO_CART_DATA as typeof Types.CART_ADD_TO_CART_DATA,
    guitar
});
export type AddToCartDataAction = ReturnType<typeof addToCartData>;

export const decreaseQuantityData = (id: Guitar['id']) => ({
    type: Types.CART_DECREASE_QUANTITY_DATA as typeof Types.CART_DECREASE_QUANTITY_DATA,
    id
});
export type DecreaseQuantityDataAction = ReturnType<typeof decreaseQuantityData>;

export const clearCartData = () => ({
    type: Types.CART_CLEAR_CART_DATA as typeof Types.CART_CLEAR_CART_DATA
});
export type ClearCartDataAction = ReturnType<typeof clearCartData>

export const increaseQuantityData = (id: Guitar['id']) => ({
    type: Types.CART_INCREASE_QUANTITY_DATA as typeof Types.CART_INCREASE_QUANTITY_DATA,
    id
});
export type IncreaseQuantityDataAction = ReturnType<typeof increaseQuantityData>

export const removeFromCartData = (id: Guitar['id']) => ({
    type: Types.CART_REMOVE_FROM_CART_DATA as typeof Types.CART_REMOVE_FROM_CART_DATA,
    id
});
export type RemoveFromCartDataAction = ReturnType<typeof removeFromCartData>;

export const setGuitarsData = (guitars: Guitar[]) => ({
    type: Types.CART_SET_GUITARS_DATA as typeof Types.CART_SET_GUITARS_DATA,
    guitars
});
export type SetGuitarsDataAction = ReturnType<typeof setGuitarsData>
