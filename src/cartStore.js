import { atom } from 'nanostores';

export const isCartOpen = atom(false);

export const cartItems = atom([]);

export const addToCart = (item) => {
    // first serach if the item is already in the cart
    const existingItem = cartItems.get().find((i) => i.id === item.id);
    if (existingItem) {
        // if it is, update the quantity
        cartItems.set(cartItems.get().map((i) => i.id === item.id ? {...i, quantity: i.quantity + 1} : i));
    } else {
        // if it is not, add it to the cart
        cartItems.set([...cartItems.get(), {...item, quantity: 1}]);
    }
};

export const removeFromCart = (item) => {
    cartItems.set(cartItems.get().filter((i) => i.id !== item.id));
};

export const updateQuantity = (item, quantity) => {
    cartItems.set(cartItems.get().map((i) => i.id === item.id ? {...i, quantity: quantity} : i));
};

export const getTotal = () => {
    return cartItems.get().reduce((acc, item) => acc + item.price * item.quantity, 0);
};

export const getTotalItems = () => {
    return cartItems.get().reduce((acc, item) => acc + item.quantity, 0);
};
