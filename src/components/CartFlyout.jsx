import { useStore } from '@nanostores/preact';
import { isCartOpen, cartItems, removeFromCart, updateQuantity, getTotal } from '../cartStore';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);
  
    return $isCartOpen ? <aside className="fixed top-0 right-0 h-full w-1/3 bg-white border-l bg-gray-100 shadow-lg">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4">Carrito</h2>
          <button onClick={() => isCartOpen.set(false)}>Cerrar</button>
        </div>
        <ul>
          {
            $cartItems.map((item) => (
              <div className="flex justify-between items-center">
                <li key={item.id}>
                  {item.name} - ${item.price.toFixed(2)}
                </li>
                <li>
                  <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item, e.target.value)} />
                </li>
                <li>
                  <button onClick={() => removeFromCart(item)}>Eliminar</button>
                </li>
              </div>
            ))
          }
        </ul>
      </div>
      <div className="p-4 flex justify-end border-t border-gray-300 fixed bottom-0 right-0 w-1/3 bg-white">
        <p>Total: ${getTotal().toFixed(2)}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors ml-4">
          Checkout
        </button>
      </div>
  </aside> : null;
}