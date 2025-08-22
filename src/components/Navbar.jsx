import { NavLink } from "react-router-dom";
import { MdShoppingCart} from "react-icons/md";
import { GiShop } from "react-icons/gi";
// import { useSelector } from "react-redux";
function Navbar() {
//   const itemCount  = useSelector();
  return (
    <nav className="navbar">
      <div className="navbox">
        <div className="logo-name">
          <GiShop className="brand-logo"/>
          <span className="brand">Basket</span>
        </div>
        <div className='home-cart'>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            <MdShoppingCart className='cart-logo'/>
          </NavLink>
          {/* {{ itemCount } > 0 && <div className="item-counter">{itemCount}</div>} */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
