function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// document.addEventListener('DOMContentLoaded', () => {
//   const svgContainer = document.getElementById('svg-container');
//   if (!svgContainer) {
//     console.error('SVG container not found');
//     return;
//   }

//   const svgTemplates = svgContainer.querySelectorAll('img[src$=".png"]');
//   console.log(svgTemplates)
//   const numElements = 20; // Total number of SVG elements you want to display
//   let elementsAdded = 0;

//   const addSvgElement = () => {
//     if (elementsAdded >= numElements) return; // Stop adding after reaching the limit

//     const randomIndex = Math.floor(Math.random() * svgTemplates.length);
//     const svgClone = svgTemplates[randomIndex].cloneNode(true);

//     // Generate random x-coordinate, animation duration, and delay
//     const randomX = Math.random() * 100;
//     const randomDuration = Math.random() * 15 + 10; // Random duration between 10s and 25s
//     const randomDelay = Math.random() * 10; // Random delay up to 10s

//     // Apply random styles
//     svgClone.style.left = `${randomX}%`;
//     svgClone.style.animation = `float ${randomDuration}s linear ${randomDelay}s infinite`;
//     svgClone.style.visibility = 'visible';

//     // Optionally, adjust size for more variation
//     const randomSize = Math.random() * 50 + 50; // Random size between 50 and 100
//     svgClone.style.width = `${randomSize}px`;
//     svgClone.style.height = `${randomSize}px`;

//     // Append the cloned SVG element to the container
//     svgContainer.appendChild(svgClone);

//     elementsAdded++;
//   };

//   // Add initial elements
//   for (let i = 0; i < numElements; i++) {
//     addSvgElement();
//   }

//   // Periodically add new elements
//   setInterval(addSvgElement, 1000); // Add a new element every 1 second
// });

