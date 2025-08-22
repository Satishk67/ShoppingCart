import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

function CartItemGrid({details}) {
    const dispatch = useDispatch();
    const deletefn = () => {
        dispatch(remove(details.id));
        toast.error("Item Removed Successfully")
    }
    return(
        <div>
            <div className="card-cart">
                <div className="img-box">
                    <img src={details.image} alt="product" className="img" />
                </div>
                <div className="info-cart">
                    <p className="title">{details.title}</p>
                    <p className="description">{details.description}</p>
                    <div className="price-delete">
                        <p className="price-cart-item">$ {details.price}</p>
                        <button className="delete" onClick={deletefn}><MdDelete/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItemGrid;