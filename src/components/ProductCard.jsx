import { cartItems, addToCart } from "../cartStore";

export default function ProductCard({ id, name, price, imageUrl, description }) {
	return (
		<div class="border border-gray-300 rounded-lg overflow-hidden max-w-xs shadow-md">
			<img src={imageUrl} alt={name} class="w-full h-48 object-cover" />
			<div class="p-4">
				<h2 class="text-xl font-semibold mb-2">{name}</h2>
				<p class="text-lg font-bold text-gray-700 mb-2">${price.toFixed(2)}</p>
				<p class="text-gray-600 mb-4">{description}</p>
				<button
					class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                    onClick={() => {
                        addToCart({id, name, price, imageUrl, description});
                    }}
                >
					Add to Cart
				</button>
			</div>
		</div>
	);
}
