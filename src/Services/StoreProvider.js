// import { createContext, useState, useEffect, useMemo } from "react";
// import { SERVER_URL, ITEMS_ENDPOINT } from "../constants";

// export const StoreContext = createContext([]);

// export const StoreProvider = ({ children }) => {
//   const [items, setItems] = useState([]);
//   const [cart, setCart] = useState([]);

//   const setStoreItems = async () => {
//     try {
//       const response = await fetch(SERVER_URL + "/" + ITEMS_ENDPOINT);
//       const data = await response.json();
//       setItems(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const addItemToCart = (item) => {
//     const storeItem = items.find((element) => element.id === item.id);
//     const cartItem = cart.find((element) => element.id === item.id);

//     if (storeItem.quantity === 0) return;
//     if (cartItem) {
//       if (storeItem.quantity === cartItem.quantity) return;

//       cartItem.quantity++;
//       setCart([...cart]);
//     } else {
//       const newCartItem = {
//         name: item.name,
//         id: item.id,
//         price: item.price,
//         image: item.image,
//         quantity: 1,
//       };

//       setCart([...cart, newCartItem]);
//     }
//   };

//   const removeItemFromCart = (item, forceDelete = false) => {
//     const cartItem = cart.find((element) => element.id === item.id);

//     if (!cartItem) return;

//     cartItem.quantity--;
//     if (cartItem.quantity <= 0 || forceDelete) {
//       const updatedCart = cart.filter((element) => element.id !== item.id);
//       setCart(updatedCart);
//     } else {
//       setCart([...cart]);
//     }
//   };

//   const storeItems = useMemo(() => {
//     return items.map((item) => {
//       const newItem = { ...item };
//       const cartItem = cart.find((element) => element.id === newItem.id);

//       if (cartItem) {
//         newItem.quantity -= cartItem.quantity;
//       }

//       return newItem;
//     });
//   }, [items, cart]);

//   const checkout = () => {
//     const newItems = items.map((item) => {
//       const cartItem = cart.find((element) => element.id === item.id);
//       const newItem = { ...item };
//       if (cartItem) {
//         newItem.quantity -= cartItem.quantity;
//       }

//       return newItem;
//     });

//     setItems(newItems);
//     setCart([]);
//   };

//   useEffect(() => {
//     setStoreItems();
//   }, []);
//   const value = {
//     cart,
//     addItemToCart,
//     removeItemFromCart,
//     storeItems,
//     checkout,
//   };
//   return (
//     <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
//   );
// };
