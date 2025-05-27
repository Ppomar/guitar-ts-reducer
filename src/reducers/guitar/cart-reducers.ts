import { CartGuitar, Guitar } from "../../types";
import * as CartDataActions from "./cart-actions";

export type CartActions =
  | CartDataActions.AddToCartDataAction
  | CartDataActions.DecreaseQuantityDataAction
  | CartDataActions.ClearCartDataAction
  | CartDataActions.IncreaseQuantityDataAction
  | CartDataActions.RemoveFromCartDataAction
  | CartDataActions.SetGuitarsDataAction;

export type CartState = {
  guitars: Guitar[];
  cart: CartGuitar[];
};

const initialCart = (): CartGuitar[] => {
  const lsCart = localStorage.getItem('cart');
  return lsCart ? JSON.parse(lsCart) : [];
}

export const cartInitialState: CartState = {
  guitars: [],
  cart: initialCart(),
};

export const cartReducer = (
  state: CartState = cartInitialState,
  action: CartActions
) => {
  switch (action.type) {
    case CartDataActions.Types.CART_ADD_TO_CART_DATA:
      return addToCartData(state, action);
    case CartDataActions.Types.CART_CLEAR_CART_DATA:
      return clearCartData(state, action);
    case CartDataActions.Types.CART_DECREASE_QUANTITY_DATA:
      return decreaseQuantityData(state, action);
    case CartDataActions.Types.CART_INCREASE_QUANTITY_DATA:
      return increaseQuantityData(state, action);
    case CartDataActions.Types.CART_REMOVE_FROM_CART_DATA:
      return removeFromCartData(state, action);
    case CartDataActions.Types.CART_SET_GUITARS_DATA:
        return setGuitarsData(state, action);      

    default:
      return state;
  }
};

const addToCartData = (
  state: CartState,
  action: CartDataActions.AddToCartDataAction
): CartState => {
  const newState = { ...state };
  const { guitar } = action;

  const itemExists = newState.cart.find((cg) => cg.id === guitar.id);

  if (itemExists) {
    newState.cart = newState.cart.map((gc) => gc.id === itemExists.id && gc.quantity < 5
    ? {...gc, quantity: gc.quantity++ } : gc);
  } else {
    const cartGuitar: CartGuitar = {...guitar, quantity: 1 };
    newState.cart = [...newState.cart, cartGuitar];
  }

  return newState;
};

const clearCartData = (state: CartState, action: CartDataActions.ClearCartDataAction): CartState => {
  const newState = {...state};
  const {} = action;
  
  newState.cart = [];

  return newState;
};

const decreaseQuantityData = (state: CartState, action: CartDataActions.DecreaseQuantityDataAction): CartState => {
  const newState = { ...state };
  const { id } = action;

  newState.cart = newState.cart.map(cg => cg.id === id && cg.quantity > 1 
    ? {...cg, quantity: cg.quantity-- } : cg
  );

  return newState;
};

const increaseQuantityData = (state: CartState, action: CartDataActions.IncreaseQuantityDataAction): CartState => {
  const newState = {...state};
  const { id } = action;

  newState.cart = newState.cart.map((gc) => gc.id === id && gc.quantity < 5 
  ? { ...gc, quantity: gc.quantity++ } : gc 
  );  

  return newState;
};

const removeFromCartData = (state: CartState, action: CartDataActions.RemoveFromCartDataAction): CartState => {
  const newState = {...state};
  const { id } = action;

  const cartFiltered = newState.cart.filter(g => g.id !== id);
  newState.cart = cartFiltered;

  return newState;
};

const setGuitarsData = (state: CartState, action: CartDataActions.SetGuitarsDataAction): CartState => {
    const newState = {...state};
    const { guitars } = action;

    newState.guitars = guitars;

    return newState;
};