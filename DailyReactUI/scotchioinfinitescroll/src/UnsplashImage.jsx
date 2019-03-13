import React, { Component } from 'react';

export const UnsplashImage = ({ url, key }) => (
  <div class="image-item" key={key}>
    <img src={url} />
  </div>
);

export default UnsplashImage;