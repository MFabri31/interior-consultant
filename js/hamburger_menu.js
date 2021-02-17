const hamburgerMenu = (buttonHamburger, mainMenu, menuLink) => {
  document.addEventListener("click", (e) => {
    if (
      e.target.matches(buttonHamburger) ||
      e.target.matches(`${buttonHamburger} *`)
    ) {
      document.querySelector(mainMenu).classList.toggle("show-menu");
      document.querySelector(buttonHamburger).classList.toggle("is-active");
    }

    if (e.target.matches(menuLink)) {
      document.querySelector(mainMenu).classList.remove("show-menu");
      document.querySelector(buttonHamburger).classList.remove("is-active");
    }
  });
};

export default hamburgerMenu;
