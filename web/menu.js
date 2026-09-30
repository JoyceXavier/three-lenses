document.documentElement.classList.add("js");

const header = document.querySelector(".site-header");
const toggle = header?.querySelector(".menu-toggle");
const menu = header?.querySelector(".site-nav");
const mobileMenu = window.matchMedia("(max-width: 860px)");

if (header && toggle && menu) {
  const setMenuState = (open, returnFocus = false) => {
    const shouldOpen = mobileMenu.matches && open;

    menu.hidden = mobileMenu.matches ? !shouldOpen : false;
    header.classList.toggle("is-menu-open", shouldOpen);
    toggle.setAttribute("aria-expanded", String(shouldOpen));
    toggle.setAttribute("aria-label", shouldOpen ? "Fechar menu" : "Abrir menu");

    if (returnFocus) {
      toggle.focus();
    }
  };

  toggle.addEventListener("click", () => {
    setMenuState(toggle.getAttribute("aria-expanded") !== "true");
  });

  toggle.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const willOpen = toggle.getAttribute("aria-expanded") !== "true";

      setMenuState(willOpen);

      if (willOpen) {
        menu.querySelector("a")?.focus();
      }
    }
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuState(false, true);
    }
  });

  document.addEventListener("click", (event) => {
    if (
      toggle.getAttribute("aria-expanded") === "true" &&
      !header.contains(event.target)
    ) {
      setMenuState(false);
    }
  });

  mobileMenu.addEventListener("change", () => setMenuState(false));
  setMenuState(false);
}
