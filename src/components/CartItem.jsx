import { useSelector } from "react-redux"
import CartItemGrid from "./CartItemGrid"
function CartItem() {
    const {cart} = useSelector((state) => state);
    return(
        <div className="cart-item">
            {
                cart.map( (i,index) => {
                    return <CartItemGrid key={i.id} details={i} itemindex={index}/>
                } )
            }
        </div>
    )
}

export default CartItem