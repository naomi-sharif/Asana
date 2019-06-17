const app = {

  init() {
    this.toggleHamburger();
    this.toggleMobileMenu();
  },

  toggleHamburger() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
    })
  },

  toggleMobileMenu(){
    const body = document.querySelector(".page-wrapper");
    const mobileMenu = document.querySelector(".mobile-menu");
    const toggle = document.querySelector(".hamburger");
    toggle.addEventListener("click", () => {
      body.classList.toggle("page-wrapper--menu-open");
      mobileMenu.classList.toggle("mobile-menu--open");
    })
  },

}

app.init();
