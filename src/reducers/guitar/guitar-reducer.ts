import { Guitar } from "../../types";

export type GuitarActions = {};

export type GuitarState = {
    guitars: Guitar[]
};

export const guitarInitialState: GuitarState = {
    guitars: []
};

export const guitarReducer = (state: GuitarState = guitarInitialState,
    action: GuitarActions
) => {
    
};
