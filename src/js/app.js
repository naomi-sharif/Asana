const app = {

  init() {
    this.toggleHamburger();
    this.toggleMobileMenu();
  },

  toggleHamburger() {
    const hamburger = document.querySelector(".js-toggle-hamburger");
    hamburger.addEventListener("click", () => {
      // TODO Update class to js-active.
      hamburger.classList.toggle("active");
    })
  },

  toggleMobileMenu(){
    // TODO Updated class to use js-page-wrapper.
    const body = document.querySelector(".page-wrapper");
    // TODO Updated class to use js-mobile-menu.
    const mobileMenu = document.querySelector(".mobile-menu");
    // TODO Update class to use - js-toggle-hamburger.
    const toggle = document.querySelector(".hamburger");
    toggle.addEventListener("click", () => {
      body.classList.toggle("page-wrapper--menu-open");
      mobileMenu.classList.toggle("mobile-menu--open");
    })
  },

}

app.init();
