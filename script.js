// Get all the animated-text elements
const animatedTextElements = document.querySelectorAll(".animate");

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle the scroll event
function handleScroll() {
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percentageScrolled = (document.documentElement.scrollTop / totalHeight) * 100;

  animatedTextElements.forEach((element) => {
    if (isElementInViewport(element)) {
      if (element.classList.contains("animated-fadeLeft") && percentageScrolled > 0.08) {
        element.classList.add("home-text", "animated-text-fadeLeft");
      }
      if (element.classList.contains("animated-fadeUp") && percentageScrolled > 0.12) {
        element.classList.add("home-text", "animated-text-fadeUp");
      }
    }
  });
}

window.addEventListener("scroll", function () {
  handleScroll();
});
