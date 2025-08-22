import { NavLink } from "react-router-dom";
function NoRoute() {
  return (
    <div className='main-content'>
      <div>No Route</div>
      <NavLink to='/' className='nav-link home-btn'>Home</NavLink>
    </div>
  );
}
export default NoRoute;
