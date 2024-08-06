document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
    for (const link of smoothScrollLinks) {
      link.addEventListener("click", smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const yOffset = -60; // Adjust this value as needed
  
      window.scrollTo({
        top: targetElement.offsetTop + yOffset,
        behavior: "smooth",
      });
    }
  });