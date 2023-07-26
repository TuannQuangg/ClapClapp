//TODO: add event click for login Button
const loginBtn = document.querySelector(".header__login-btn");
const loginUI = document.querySelector(".signin");
const loginContainer = document.querySelector(".signin__container");

const showLoginForm = () => loginUI.classList.add("show-loginUI");
const hideLoginForm = () => loginUI.classList.remove("show-loginUI");

loginBtn.addEventListener("click", showLoginForm);
loginUI.addEventListener("click", hideLoginForm);
loginContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});

//TODO: add event click for signup button
const signupBtn = document.querySelector(".header__signup-btn");
const signupUI = document.querySelector(".signup");
const signupContainer = document.querySelector(".signup__container");

const showSignUpForm = () => signupUI.classList.add("show-signupUI");
const hideSignUpForm = () => signupUI.classList.remove("show-signupUI");

signupBtn.addEventListener("click", showSignUpForm);
signupUI.addEventListener("click", hideSignUpForm);
signupContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});

//TODO: hide-show password
const passField = document.querySelector(".form__input--password");
const showBtn = document.querySelector(".show-js");
showBtn.onclick = () => {
  if (passField.type === "password") {
    passField.type = "text";
    showBtn.classList.add("hide-btn");
  } else {
    passField.type = "password";
    showBtn.classList.remove("hide-btn");
  }
};

const test = document.querySelector('.watch-btn')
test.addEventListener("click", () => {
  console.log("Clicked")
})