const links = document.querySelectorAll(".nav-list ul li a");

links.forEach((li) => {
  li.addEventListener("click", () => {
    links.forEach((l) => {
      l.classList.remove("active");
    });
    li.classList.add("active");
  });
});
