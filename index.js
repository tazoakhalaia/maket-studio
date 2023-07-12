function smoothScroll(target) {
    const element = document.querySelector(target);
    const position = element.offsetTop;
    const duration = 1000;
    
    window.scrollTo({
      top: position,
      behavior: 'smooth' 
    });
    
    event.preventDefault();
  }
  