let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let titleInput = document.querySelector("#subject");
let messageInput = document.querySelector("#message");
let submitBtn = document.querySelector("#submit");
let warn = document.querySelector("#warning")

submitBtn.addEventListener("click", function (event) {

    event.preventDefault();
    if (
        nameInput.value === "" ||
        emailInput.value === "" ||
        titleInput.value === "" ||
        messageInput.value === ""
    ) {
        warn.textContent = "You are reuired to fill all fields"
        return
    };
    submitBtn.textContent = "Submitted"
    submitBtn.reset();
});

const menuToggle = document.getElementById("menuToggle");
const menuBar = document.querySelector(".menu_bar");

menuToggle.addEventListener("click", function () {
  menuBar.classList.toggle("active");
});
