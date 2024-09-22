import { useStore } from '@nanostores/preact';
import { isCartOpen, cartItems } from '../cartStore';

export default function CartButton() {
    const $isCartOpen = useStore(isCartOpen);
    const $cartItems = useStore(cartItems);
  return (
    <button onClick={() => isCartOpen.set(!$isCartOpen)} className={`text-gray-600 hover:text-green-900 ${$isCartOpen ? 'bg-red-900' : ''}`}>
      Cart {`(${$cartItems.length})`}
    </button>
  );
}
