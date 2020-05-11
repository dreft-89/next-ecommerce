import React from 'react';
import NextLink from 'next/link';

export default () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NextLink href="/">Home</NextLink>
            </li>
            <li>
              <NextLink href="/about">About</NextLink>
            </li>
            <li>
              <NextLink href="/contact-us">Contact-US</NextLink>
            </li>
            <li>
              <NextLink href="/privacy">Privacy and Policy</NextLink>
            </li>
            <li>
              <NextLink href="/login">Login</NextLink>
            </li>
            <li>
              <NextLink href="/cart">Cart</NextLink>
            </li>
            <li>
              <NextLink href="/product-details">Product Details</NextLink>
            </li>
            <li>
              <NextLink href="/product-list">Product List</NextLink>
            </li>
          </ul>
        </nav>
        <h1>Product List</h1>
      </div>
    );
}
