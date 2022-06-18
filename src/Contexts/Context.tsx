import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";
import React from "react";


type Props = {
  children: React.ReactNode;
}

type ProductsProp = {
  id: string;
  name: string;
  price: string;
  image: string;
  inStock: number;
  fastDelivery: boolean;
  ratings: number;
}
type ProductStateProp = {
  byStock: boolean,
  byFastDelivery: boolean,
  byRating: number,
  searchQuery: string,
  sort: string;

}

type CartProp = {
  qty: number;
  id: string;
  name: string;
  price: string;
  image: string;
  inStock: number;
  fastDelivery: boolean;
  ratings: number;
}

type ContextProp = {
  state: {
    cart: CartProp[];
    products: ProductsProp[];
  },
  dispatch: React.Dispatch<any>,
  productState: ProductStateProp,
  productDispatch: React.Dispatch<any>,
}

const Cart = createContext<ContextProp>({
  state: {
    cart: [],
    products: [],
  },
  dispatch: () => null,
  productState: {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
    sort: "",

  },
  productDispatch: () => null,
});



faker.seed(99);

const Context = ({ children }: Props) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));


  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });


  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
    sort: "",
  });


  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
