// Get all the animated-text elements
const animatedTextElements = document.querySelectorAll(".animate");

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  var percentageScroll = 100;

  return (
    rect.top <= ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
  );
}

// Function to handle the scroll event
function handleScroll() {
  // const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  // const percentageScrolled = (document.documentElement.scrollTop / totalHeight) * 100;

  animatedTextElements.forEach((element) => {
    if (isElementInViewport(element)) {
      if (element.classList.contains("sample1")){
        element.classList.add('.home-heading1, .animated-home-heading1');
      }        
      if (element.classList.contains("sample2")){
        element.classList.add('.home-heading2, .animated-home-heading2');
      }
      if (element.classList.contains("sample3")){
        element.classList.add('home-background');
      }
    }
  });
}

window.addEventListener("scroll", function () {
  handleScroll();
});
