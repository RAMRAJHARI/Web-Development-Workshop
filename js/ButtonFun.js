const hirebtn = document.getElementById("hirebtn");
hirebtn.addEventListener("click", () => {
  hirebtn.style.display = "none";
  document.getElementById("resume_forward").innerHTML =
    "Thank you for showing interest. Resume Forwarded";
});
const button = document.getElementById("my-button");
const nav = document.getElementById("mynav");

button.addEventListener("click", () => {
  nav.classList.toggle("show");
});
