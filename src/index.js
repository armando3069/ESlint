// src/index.js

import "./styles/style.css";
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";

const images = [img1, img2];
let currentImageIndex = 0;

const imageElement = document.getElementById("image");

document.getElementById("change-image").addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageElement.src = images[currentImageIndex];
});
