// Event Submenu
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

// Event Navigation Menu
(function () {
  let iconMenu = document.querySelector(".iconMenu");

  iconMenu.addEventListener("click", function () {
    let menu = this.nextElementSibling;
    let parentMenu = this.parentElement;

    menu.classList.toggle("showMenu");
  });
})();

// Event Clipboard
(function () {
  let cards = Array.from(document.querySelectorAll(".cardCopy"));

  cards.forEach((card) => {
    let cardCopyHead = card.querySelector(".cardCopy__head"),
      iconCopy = cardCopyHead.querySelector(".iconCopy"),
      textCopy = card.querySelector(".textCopy");

    iconCopy.addEventListener("click", function () {
      // copy the text
      textCopy.select();
      textCopy.setSelectionRange(0, 99999); // for mobile devices

      // copy the text inside the textarea
      navigator.clipboard.writeText(textCopy.value);

      // show alert after copy
      this.classList.add("alertCopy");

      setTimeout(() => {
        this.classList.remove("alertCopy");
      }, 1000);
    });
  });
})();
