import React from 'react'
import "../App.css"
import"./header.css"
import"./tracking.css"
import logo from "../assets/logo.png"
import mobileLogo from "../assets/mobile-logo.png"
import searchIcon from "../assets/icons/search-icon.png"
import cartIcon from "../assets/icons/cart-icon.png"
import sock from "../assets/products/athletic-cotton-socks-6-pairs.jpg"


export const tracking = () => {
  return (
    <>
        <title>Order Tracking</title>
        <div className="header">
        <div className="left-section">
            <a href="/" className="header-link">
            <img className="logo"
                src={logo} />
            <img className="mobile-logo"
                src={mobileLogo} />
            </a>
        </div>

        <div className="middle-section">
            <input className="search-bar" type="text" placeholder="Search" />

            <button className="search-button">
            <img className="search-icon" src={searchIcon} />
            </button>
        </div>

        <div className="right-section">
            <a className="orders-link header-link" href="/">

            <span className="orders-text">Orders</span>
            </a>

            <a className="cart-link header-link" href="/checkout">
            <img className="cart-icon" src={cartIcon} />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
            </a>
        </div>
        </div>

        <div className="tracking-page">
        <div className="order-tracking">
            <a className="back-to-orders-link link-primary" href="/orders">
            View all orders
            </a>

            <div className="delivery-date">
            Arriving on Monday, June 13
            </div>

            <div className="product-info">
            Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>

            <div className="product-info">
            Quantity: 1
            </div>

            <img className="product-image" src={sock} />

            <div className="progress-labels-container">
            <div className="progress-label">
                Preparing
            </div>
            <div className="progress-label current-status">
                Shipped
            </div>
            <div className="progress-label">
                Delivered
            </div>
            </div>

            <div className="progress-bar-container">
            <div className="progress-bar"></div>
            </div>
        </div>
        </div>
    </>
  )
}
