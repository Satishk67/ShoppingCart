import { NavLink } from "react-router-dom"
function EmptyCart () {
    return (
        <div className="main-content">
            <p>You Cart is empty</p>
            <NavLink to='/' className='nav-link home-btn'>Shop Now</NavLink>
        </div>
    )
}

export default EmptyCart