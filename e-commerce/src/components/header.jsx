import './header.css';
import logoWhite from "../assets/logo-white.png";
import mobileLogo from "../assets/mobile-logo-white.png";
import searchIcon from "../assets/icons/search-icon.png";
import cartIcon from "../assets/icons/cart-icon.png";

export function Header(){
  return (
        <>
                <div className="header">
                <div className="left-section">
                        <a href="index.html" className="header-link">
                        <img className="logo"
                        src={logoWhite}/>
                        <img className="mobile-logo"
                        src={mobileLogo} />
                        </a>
                </div>

                <div className="middle-section">
                        <input className="search-bar" type="text" placeholder="Search" />

                        <button className="search-button">
                        <img className="search-icon" src={searchIcon}/>
                        </button>
                </div>

                <div className="right-section">
                        <a className="orders-link header-link" href="orders.html">

                        <span className="orders-text">Orders</span>
                        </a>

                        <a className="cart-link header-link" href="checkout.html">
                        <img className="cart-icon" src={cartIcon} />
                        <div className="cart-quantity">3</div>
                        <div className="cart-text">Cart</div>
                        </a>
                </div>
                </div>

        </>


  )
}