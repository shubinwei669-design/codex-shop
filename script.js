const header = document.querySelector("[data-header]");
const form = document.querySelector(".reservation-form");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  button.textContent = "已收到订位";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = "提交订位";
    button.disabled = false;
    form.reset();
  }, 2200);
});
