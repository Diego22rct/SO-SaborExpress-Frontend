const BASE_URL = "http://127.0.0.1:8000";

export const getProducts = async () => {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json();
    return data;
};

export const getCategories = async () => {
    const res = await fetch(`${BASE_URL}/categories`);
    const data = await res.json();
    return data;
};
