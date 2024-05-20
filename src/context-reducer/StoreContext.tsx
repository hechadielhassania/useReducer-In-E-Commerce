import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
import reducer, { initialState, State, Action, Product } from "./reducer";

interface StoreContextValue {
    total: number;
    products: Product[];
    addToBasket: (product: Product) => void;
    removeFromBasket: (product: Product) => void;
}

export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState);

    const addToBasket = (product: Product) => {
        const updateBasket = [...state.products, product];

        updatePrice(updateBasket);

        dispatch({
            type: 'add',
            payload: updateBasket,
        });
    };

    const removeFromBasket = (product: Product) => {
        const updateBasket = state.products.filter(
            (currentProduct) => currentProduct.name !== product.name
        );

        updatePrice(updateBasket);

        dispatch({
            type: 'remove',
            payload: updateBasket,
        });
    };

    const updatePrice = (products: Product[]) => {
        const total = products.reduce((sum, product) => sum + product.price, 0);

        dispatch({
            type: 'update price',
            payload: total,
        });
    };

    const value = {
        total: state.total,
        products: state.products,
        addToBasket,
        removeFromBasket,
    };

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
