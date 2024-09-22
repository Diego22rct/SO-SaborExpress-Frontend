const BASE_URL = "http://127.0.0.1:8000";

export const getProducts = async () => {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json();
    console.log(data);
    return data;
};