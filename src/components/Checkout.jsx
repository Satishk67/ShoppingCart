import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { clear } from "../redux/slices/CartSlice";

function Checkout(){

    const {cart} = useSelector((state) => state)
    const count = cart.length;
    const [bill, setBill] = useState(0);
    const go = useNavigate();
    const dispatch = useDispatch();

    useEffect( () => {
        setBill( cart.reduce( (acc,curr) => acc + curr.price , 0) );
    },[cart])

    const checkoutfn = () => {
        alert("Order Placed Successfully!");
        dispatch(clear());
        go('/');
    }

    return(
        <div className="summary-box">
            <h3 className="heading">Your Cart</h3>
            <h1 className="heading">SUMMARY</h1>
            <p className="count">Total Items : {count}</p>
            <p className="total">Total Amout : $ {bill}</p>
            <div className="checkout-btn-box">
                <button className="checkout-btn home-btn" onClick={checkoutfn}>Checkout Now</button>
            </div>
            </div>
    )
}
export default Checkout
