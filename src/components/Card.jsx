import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-toastify'
import { add, remove} from "../redux/slices/CartSlice";

function Card({details}){

    const imgUrl = details.image;
    const {cart} = useSelector((state) => state);
    const [readmore, setReadMore] = useState(false);
    const dispatch = useDispatch();
    const x = details.rating.rate;
    
    let desc = details.description.substring(0,100)

    if(desc.length > 100) desc += "...";
    if(readmore){
        desc = (details.description);
    }else{
        desc = (details.description).substring(0,100) + '...';
    }

    const clickHandler = () => {
        if(cart.some((p) => p.id === details.id)){
            dispatch(remove(details.id));
            toast.error("Item removed from Cart");
        }else{
            dispatch(add(details));
            toast.success("Item added to Cart");
        }
    }


    return (
        <div className="card-box">
            <p className="product-title">
                {details.title}
            </p>
            <div className="image-box">
                <img src={imgUrl} alt="product" className='product-image' />
                <span className="rating">{x} / 5</span>
            </div>
            <p className="desc">
                {desc} 
                {
                details.description.length > 100 ? <button onClick={() => {setReadMore(readmore ? false : true)}} className="readmore-btn">
                    {readmore ? "ReadLess" : "ReadMore"}
                </button> : " "
                }
            </p>
            <div className="add-price">

            <p className="price">
                $ {details.price}
            </p>
            <button className="add-remove-btn" onClick={clickHandler}>
                {cart.some((p) => p.id === details.id) ? 'Remove Item' : 'Add To Cart'}
            </button>
            </div>
        </div>
    )
}
export default Card