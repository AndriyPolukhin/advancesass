import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Collage.css';
import UnsplashImage from './UnsplashImage';

const Collage = () => {
  return (
    <div class="hero is-fullheight is-bold is-info">
      <div className='hero-body'>
        <div className='container'>
          <div className='header content'>
            <h2 className='subtitle is-6'>Code Challenge #16</h2>
            <h1 className='title is-1'>
              Infinite Scroll Unsplash Code Challenge
            </h1>
          </div>
          {/* Images go here */}
          <UnsplashImage />

        </div>
      </div>
    </div>
  )
}

export default Collage;