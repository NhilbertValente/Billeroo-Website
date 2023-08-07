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
        element.classList.add('home-text','animated-text-fadeLeft');
      }        
      if (element.classList.contains("sample2")){
        element.classList.add('home-text','animated-text-fadeUp');
      }
      if (element.classList.contains("sample3")){
        element.classList.add('home-text09');
      }
      if (element.classList.contains("sample4")){
        element.classList.add('home-what-is-billeroo');
      }
      if (element.classList.contains("sample5")){
        element.classList.add('home-text02');
      }
      if (element.classList.contains("sample6")){
        element.classList.add('home-text03');
      }
      if (element.classList.contains("sample7")){
        element.classList.add('home-text10');
      }
      if (element.classList.contains("sample8")){
        element.classList.add('home-text11');
      }
      if (element.classList.contains("sample9")){
        element.classList.add('home-image09');
      }
      if (element.classList.contains("sample10")){
        element.classList.add('home-heading');
      }
      if (element.classList.contains("sample11")){
        element.classList.add('home-text14');
      }
      if (element.classList.contains("sample12")){
        element.classList.add('home-text15');
      }
      if (element.classList.contains("sample13")){
        element.classList.add('home-text16');
      }
      if (element.classList.contains("sample14")){
        element.classList.add('home-text17');
      }
      if (element.classList.contains("sample15")){
        element.classList.add('home-text18');
      }
      if (element.classList.contains("sample16")){
        element.classList.add('home-text19');
      }
      if (element.classList.contains("sample17")){
        element.classList.add('home-text20');
      }
      if (element.classList.contains("sample18")){
        element.classList.add('home-text21');
      }
      if (element.classList.contains("sample19")){
        element.classList.add('home-text22');
      }
      if (element.classList.contains("sample20")){
        element.classList.add('home-text28');
      }
    }
  });
}

window.addEventListener("scroll", function () {
  handleScroll();
});
