const modalCb = document.querySelector(".modal-cb");
const cbOpenBtn = document.querySelectorAll(".cb-open");
const menuBtn = document.querySelectorAll(".burger-menu");
const cbClose = document.querySelector(".close");
const openModal = document.querySelectorAll(".modal-container");
const modalMenu = document.querySelector(".modal-menu");
const checkbox = document.querySelector(".form-checkbox");
const submitBtn = document.querySelector(".btn-submit-form");
const errorMsg = document.querySelector(".privacy");
const successSubmit = document.querySelector(".success-submit");
const formBody = document.querySelector(".form-body");
const scrollBtn = document.querySelectorAll("input");

const screenHeight = window.screen.height;

for (let el of scrollBtn) {
  el.addEventListener("change", () => {
    console.log(el.checked);
    el.checked
      ? scroll({ top: screenHeight, behavior: "smooth" })
      : scroll({ top: 0, behavior: "smooth" });
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formBody.classList.add("dn");
  successSubmit.hidden = false;

  setTimeout(() => {
    for (let el of openModal) el.classList.remove("open");
    formBody.classList.remove("dn");
    successSubmit.hidden = true;
  }, 1000);
});
checkbox.addEventListener("change", () => {
  checkbox.checked ? (submitBtn.disabled = false) : (submitBtn.disabled = true);
  submitBtn.disabled
    ? (submitBtn.classList.add("disabled"), (errorMsg.hidden = false))
    : (submitBtn.classList.remove("disabled"), (errorMsg.hidden = true));
});

for (let el of cbOpenBtn) {
  el.addEventListener("click", () => {
    modalCb.classList.add("open");
  });
}

for (let el of menuBtn) {
  el.addEventListener("click", () => {
    modalMenu.classList.toggle("open");
  });
}
cbClose.addEventListener("click", () => {
  for (let el of openModal) el.classList.remove("open");
});
