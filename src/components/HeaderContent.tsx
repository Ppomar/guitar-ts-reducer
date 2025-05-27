import React, { Dispatch } from "react";
import { CartGuitar } from "../types";
import { CartActions } from "../reducers/guitar/cart-reducers";
import { clearCartData, decreaseQuantityData, increaseQuantityData, removeFromCartData } from "../reducers/guitar/cart-actions";

type HeaderContentProps = {
    cart: CartGuitar[];
    dispatch: Dispatch<CartActions>;
}

const getCartRows = (cart: CartGuitar[], dispatch: Dispatch<CartActions>) => {
    return cart.map((g) => {
        const { id, image, name, price, quantity } = g;

        const onRemoveButtonClick = getOnRemoveButtonClick(id, dispatch);
        const onMinusButtonClick = getOnMinusButtonClick(id, dispatch);
        const onPlusButtonClick = getOnPlusButtonClick(id, dispatch);
        
        return(
            <tr key={`cart-row-${id}`}>
            <td>
              <img
                className="img-fluid"
                src={`/img/${image}.jpg`}
                alt="imagen guitarra"
              />
            </td>
            <td>{name}</td>
            <td className="fw-bold">${price}</td>
            <td className="flex align-items-start gap-4">
              <button
                type="button"
                className="btn btn-dark"
                onClick={onMinusButtonClick}
              >
                -
              </button>
              {quantity}
              <button
                type="button"
                className="btn btn-dark"
                onClick={onPlusButtonClick}
              >
                +
              </button>
            </td>
            <td>
              <button
                className="btn btn-danger"
                type="button"
                onClick={onRemoveButtonClick}
              >
                X
              </button>
            </td>
          </tr>
        );
    });
}

const getOnPlusButtonClick = (id: CartGuitar['id'], dispatch: Dispatch<CartActions>) => () => {
    dispatch(increaseQuantityData(id));
};

const getOnMinusButtonClick = (id: CartGuitar['id'], dispatch: Dispatch<CartActions>) => () => {
    dispatch(decreaseQuantityData(id));
};

const getOnRemoveButtonClick = (id:CartGuitar['id'], dispatch: Dispatch<CartActions>) => () => {
    dispatch(removeFromCartData(id));
}

const getOnClearCartButtonClick = (dispatch: Dispatch<CartActions>) => () => {
  dispatch(clearCartData());
};

const HeaderContent: React.FC<HeaderContentProps> = ({ cart, dispatch }) => {
    const isEmpty = cart.length === 0;
    const cartRows = getCartRows(cart, dispatch);

    const onClearCartButtonClick = getOnClearCartButtonClick(dispatch);

    return (
        <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img
                  className="img-fluid"
                  src="/img/logo.svg"
                  alt="imagen logo"
                />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="carrito">
                <img
                  className="img-fluid"
                  src="/img/carrito.png"
                  alt="imagen carrito"
                />
  
                <div id="carrito" className="bg-white p-3">
                  {isEmpty ? (
                    <p className="text-center">El carrito esta vacio</p>
                  ) : (
                    <>
                      <table key={"cart-main-table"} className="w-100 table">
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>{cartRows}</tbody>
                      </table>
  
                      <p className="text-end">
                        Total pagar: <span className="fw-bold">${}</span>
                      </p>
                    </>
                  )}
  
                  <button className="btn btn-dark w-100 mt-3 p-2"
                  onClick={onClearCartButtonClick}>
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>);
}

export default HeaderContent;