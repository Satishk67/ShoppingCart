import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";
import EmptyCart from "../components/EmptyCart";

function Cart() {
  const { cart } = useSelector((state) => state);
  return (
    <div className="main-content">
      {cart.length == 0 ? (
        <EmptyCart />
      ) : (
        <div className="cart-page">
          <CartItem /> 
          <Checkout />
        </div>
      )}
    </div>
  );
}
export default Cart;
