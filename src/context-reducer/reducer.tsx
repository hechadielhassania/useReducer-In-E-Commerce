// Define the type for the state
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface State {
    total: number;
    products: Product[];
}

export interface Action {
    type: string;
    payload: any;
}

export const initialState: State = {
    total: 0,
    products: []
}

const storeReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                products: action.payload
            }
        case "remove":
            return {
                ...state,
                products: action.payload
            }
        case "update price":
            return {
                ...state,
                total: action.payload
            }
        default:
            throw new Error("Cannot match any case in reducer");
    }
}

export default storeReducer;
