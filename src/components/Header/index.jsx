import {Routes, Route} from "react-router-dom"; 
import {Link} from "react-router-dom"; 

// import About from "../About/about";
// import MyProfile from "../MyProfile/showUser";
// import StorePage from "../../pages/products/storePage";
import "./Header.css";

const Nav = () => (
    <nav className="Nav">
        {/* <h3><Link to={"../../components/About/about"}>About </Link></h3> */}
        {/* <h3><Link to={"/users/:id"}>Your Profile</Link></h3> */}
        {/* <h3><Link to={"/favorites"}>Your Favorites</Link></h3> */}
        {/* <h3><Link to={"/logOut"}>Log Out</Link></h3> */}
        <h3><Link to={"/favorites"}>Your Favorites</Link></h3>
        <h3><Link to={"/"}>Store</Link></h3>
    </nav>
);

const Header = () => {
    return (
        <>
        {/* <Routes>
            <Route path="/users/:id" element={<MyProfile />}>My Profile</Route>
            <Route element={<About />}> About</Route>
        </Routes> */}
        <Nav />
        </>
    )
  };
  
  export default Header;

