const app = {

  init() {
    this.toggleHamburger();
  },

  toggleHamburger() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("active");
    })
  }
}

app.init();
