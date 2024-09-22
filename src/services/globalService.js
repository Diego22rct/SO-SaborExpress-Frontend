const BASE_URL = "http://127.0.0.1:8000";

export const getProducts = async () => {
    const res = await fetch(`${BASE_URL}/products`);
    return res.json();
};

export const getCategories = async () => {
    const res = await fetch(`${BASE_URL}/categories`);
    return res.json();
};

export const getProductsByCategory = async (category) => {
    const res = await fetch(`${BASE_URL}/products/category/${category}`);
    return res.json();
};
