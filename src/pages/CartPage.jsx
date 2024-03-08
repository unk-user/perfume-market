import CartList from "../components/Cart/CartList";
import OrderSum from "../components/Cart/OrderSum";

export default function CartPage() {

  return (
    <main className="flex flex-col gap-6 lg:flex-row w-full px-12 max-md:px-2 py-6 lg:justify-center">
      <CartList />
      <OrderSum />
    </main>
  );
}
