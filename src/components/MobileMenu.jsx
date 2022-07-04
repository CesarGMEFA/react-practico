import React from 'react';
import '../styles/MobileMenu.scss';

export function MobileMenu() {
  return (
    <div className="mobile-menu">
        <ul>
            <li>
                <p>CATEGORIES</p>
            </li>
            <li>
                <a href="/">All</a>
            </li>
            <li>
                <a href="/">Clothes</a>
            </li>
            <li>
                <a href="/">Electronics</a>
            </li>
            <li>
                <a href="/">Furnitures</a>
            </li>
            <li>
                <a href="/">Toys</a>
            </li>
            <li>
                <a href="/">Other</a>
            </li>
            </ul>

            <ul>
            <li>
                <a href="http://localhost:8080/account">My account</a>
            </li>
            </ul>

            <ul>
            <li>
                <a href="http://localhost:8080/account" className="email">matiaschiodo@gmail.com</a>
            </li>
            <li>
                <a href="http://localhost:8080/signup" className="sign-out">Sign out</a>
            </li>
        </ul>
    </div>
);
}