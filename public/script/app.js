(function () {
  let lists = Array.from(
    document.getElementsByClassName("list__button--click")
  );

  lists.forEach((list) => {
    list.addEventListener("click", function () {
      let subMenu = this.nextElementSibling;
      let children = Array.from(this.children);
      let iconArrow = children[1];
      let height = 0;

      iconArrow.classList.toggle("arrow");

      if (subMenu.clientHeight == 0) height = subMenu.scrollHeight;

      subMenu.style.height = `${height}px`;
    });
  });
})();

(function () {
  let iconMenu = document.querySelector(".iconMenu");

  iconMenu.addEventListener("click", function () {
    let menu = this.nextElementSibling;
    let parentMenu = this.parentElement;

    menu.classList.toggle("showMenu");
  });
})();
