// document.addEventListener("DOMContentLoaded", function () {
//   const hamburgerButton = document.getElementById("hamburger");
//   const navMenu = document.querySelector(".top-nav ul");

//   // Toggle menu visibility when hamburger button is clicked
//   hamburgerButton.addEventListener("click", function () {
//     navMenu.classList.toggle("show");
//   });

//   // Close the menu when a navigation link is clicked
//   navMenu.addEventListener("click", function (event) {
//     if (event.target.tagName === "A") {
//       navMenu.classList.remove("show");
//     }
//   });
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const carouselInner = document.querySelector('.carousel-inner');
//   const sections = document.querySelectorAll('.section');
//   const leftArrow = document.querySelector('.arrow.left');
//   const rightArrow = document.querySelector('.arrow.right');

//   let currentIndex = 0;
//   const sectionCount = sections.length;
//   let sectionWidth = window.innerWidth; // Use viewport width initially

//   // Navigate to a specific section
//   function goToSection(index) {
//     currentIndex = (index + sectionCount) % sectionCount; // Wrap around
//     const offset = -sectionWidth * currentIndex;
//     carouselInner.style.transform = `translateX(${offset}px)`;
//   }

//   // Recalculate sectionWidth on window resize and reposition carousel
//   window.addEventListener('resize', () => {
//     sectionWidth = window.innerWidth; // Recalculate based on new viewport width
//     goToSection(currentIndex); // Re-position the carousel to the current section
//   });

//   // Attach event listeners to the left and right arrows
//   leftArrow.addEventListener('click', () => {
//     goToSection(currentIndex - 1);
//   });

//   rightArrow.addEventListener('click', () => {
//     goToSection(currentIndex + 1);
//   });
// });





















document.addEventListener('DOMContentLoaded', function () {
  const carouselInner = document.querySelector('.carousel-inner');
  const sections = document.querySelectorAll('.section');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  let currentIndex = 0;
  const sectionCount = sections.length;
  let sectionWidth = window.innerWidth; // Use viewport width initially

  // Helper to calculate the total height of a section
  function calculateSectionHeight(section) {
    const children = Array.from(section.children);
    let totalHeight = 0;

    // Calculate height of all children, including margins
    children.forEach((child) => {
      const style = getComputedStyle(child);
      const childHeight = child.offsetHeight;
      const marginTop = parseInt(style.marginTop) || 0;
      const marginBottom = parseInt(style.marginBottom) || 0;

      totalHeight += childHeight + marginTop + marginBottom;
    });

    // Account for section padding and margin
    const sectionStyle = getComputedStyle(section);
    const sectionPaddingTop = parseInt(sectionStyle.paddingTop) || 0;
    const sectionPaddingBottom = parseInt(sectionStyle.paddingBottom) || 0;

    totalHeight += sectionPaddingTop + sectionPaddingBottom;

    return totalHeight;
  }

  // Set height of carousel container dynamically
  function setCarouselHeight() {
    const currentSection = sections[currentIndex];
    const newHeight = calculateSectionHeight(currentSection);

    // Add padding and margin of carousel-inner itself
    const carouselStyle = getComputedStyle(carouselInner);
    const extraPadding = parseInt(carouselStyle.paddingTop) + parseInt(carouselStyle.paddingBottom);
    const extraMargin = parseInt(carouselStyle.marginTop) + parseInt(carouselStyle.marginBottom);

    carouselInner.style.height = `${newHeight + extraPadding + extraMargin}px`;
  }

  // Navigate to a specific section
  function goToSection(index) {
    currentIndex = (index + sectionCount) % sectionCount; // Wrap around
    const offset = -sectionWidth * currentIndex;
    carouselInner.style.transform = `translateX(${offset}px)`;
    setCarouselHeight(); // Update carousel height for the current section
  }

  // Recalculate sectionWidth on window resize and reposition carousel
  window.addEventListener('resize', () => {
    sectionWidth = window.innerWidth; // Recalculate based on new viewport width
    goToSection(currentIndex); // Re-position the carousel to the current section
  });

  // Attach event listeners to the left and right arrows
  leftArrow.addEventListener('click', () => {
    goToSection(currentIndex - 1);
  });

  rightArrow.addEventListener('click', () => {
    goToSection(currentIndex + 1);
  });

  // Initialize carousel height on page load
  setCarouselHeight();
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerButton = document.getElementById("hamburger");
  const navMenu = document.querySelector(".top-nav ul");

  // Toggle menu visibility when hamburger button is clicked
  hamburgerButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from bubbling to the document
    navMenu.classList.toggle("show");
  });

  // Close the menu when a navigation link is clicked
  navMenu.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      navMenu.classList.remove("show");
    }
  });

  // Close the menu when clicking anywhere outside the menu
  document.addEventListener("click", function () {
    navMenu.classList.remove("show");
  });

  // Prevent closing the menu if the click happens inside the menu
  navMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

