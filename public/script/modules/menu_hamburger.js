export default function hamburger(menuNav, btnMenu) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`)) {
      d.querySelector(menuNav).classList.toggle("active-nav");
      d.querySelector(btnMenu).classList.toggle("activeIconMenu");
      //console.log(d.querySelector(btnMenu));
    }
  });
}
