import React, { Dispatch } from "react";
import { Guitar } from "../types";
import { CartActions } from "../reducers/guitar/cart-reducers";
import { addToCartData } from "../reducers/guitar/cart-actions";

type GuitarContentProps = {
    guitar: Guitar;
    dispatch: Dispatch<CartActions>;
}

const getAddToCart = (guitar: Guitar,  dispatch: Dispatch<CartActions>) => () => {
      dispatch(addToCartData(guitar));
};

const GuitarContent: React.FC<GuitarContentProps> = ({ dispatch ,guitar }) => {
    const { image, description, name, price } = guitar;

    const addToCart = getAddToCart(guitar, dispatch);

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
          <img
            className="img-fluid"
            src={`/img/${image}.jpg`}
            alt="imagen guitarra"
          />
        </div>
        <div className="col-8">
          <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
          <p>{description}</p>
          <p className="fw-black text-primary fs-3">{`$${price}`}</p>
          <button            
            className="btn btn-dark w-100"
            onClick={addToCart}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    );
};

export default GuitarContent;