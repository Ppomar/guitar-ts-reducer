import React, { Dispatch, useEffect, useReducer } from "react";
import HeaderContent from "./components/HeaderContent";
import {
  CartActions,
  cartInitialState,
  cartReducer,
} from "./reducers/guitar/cart-reducers";
import { fetchData } from "./helpers/common";
import { Guitar } from "./types";
import { setGuitarsData } from "./reducers/guitar/cart-actions";
import GuitarContent from "./components/GuitarContent";
import { db } from "./data/db";

const GUITAR_API_URL = "http://localhost:5062/api/guitar";

const initialState = async (dispatch: Dispatch<CartActions>) => {
  const guitars: Guitar[] = await fetchData(GUITAR_API_URL);

  if(guitars) {
    dispatch(setGuitarsData(guitars));
  }
  else {
    dispatch(setGuitarsData(db));
  }
};

const getGuitarRows = (guitars: Guitar[], dispatch: Dispatch<CartActions>) => {
  return guitars.map((g) => <GuitarContent key={`guitar-row-${g.id}`} guitar={g} dispatch={dispatch} />);
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const { cart, guitars } = state;

  useEffect(() => { 
    localStorage.setItem('cart', JSON.stringify(cart)) 
  }, [cart]);

  useEffect(() => {
    initialState(dispatch);
  }, []);

  const guitarRows = getGuitarRows(guitars, dispatch);

  return (
    <>
      <HeaderContent 
        cart={cart} 
        dispatch={dispatch}/>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">{guitarRows}</div>
      </main>
    </>
  );
};

export default App;
