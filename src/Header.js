import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import { useStateValue } from "./StateProvider";
import Navigation from "./Navigation";
import "./Navigation.css";

function Header({ showsidebar, sidebar }) {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <div>
      <nav className='header'>
        {/* Navigation */}
        <div className='header_nav'>
          <FaIcons.FaBars onClick={showsidebar} />
          <Navigation sidebar={sidebar} showsidebar={showsidebar} />
        </div>

        {/* logo */}
        <Link to='/'>
          <img
            className='header_logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          />
        </Link>

        {/* Link to sign in*/}
        <div className='header_signIn_cart'>
          <Link to='/login'>
            <p className='header_signIn'> Sign In</p>
          </Link>

          {/* Cart  */}
          <div className='header_itemCount_and_cartIcon'>
            <Link to='/checkout'>
              <span className='header_itemCount'>{basket?.length}</span>
              <CgIcons.CgShoppingCart className='header_cartIcon' />
            </Link>
          </div>
        </div>
      </nav>

      <div className='searchBar'>
        <input
          type='text'
          className='searchBar_searchInput'
          placeholder='Search Amazon'
        />
        <BiIcons.BiSearchAlt2 className='searchBar_searchIcon' />
      </div>

      {/* <div className='hot_topics'>
        <Link to='#'>
          <span>Lists</span>
        </Link>
        <Link to='#'>
          <span>Best Sellers</span>
        </Link>
        <Link to='#'>
          <span>Whole Foods</span>
        </Link>
        <Link to='#'>
          <span>Deals</span>
        </Link>
        <Link to='#'>
          <span>Video</span>
        </Link>
      </div> */}
    </div>
  );
}

export default Header;

// const textDecoration = () =>{
//   text-decoration:'none';
// }
