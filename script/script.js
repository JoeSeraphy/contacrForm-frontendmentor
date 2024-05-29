const form = document.getElementById("form");
const modal = document.getElementById("modal");
const spanText = document.querySelectorAll("#span-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const radio1 = document.getElementById("plan1");
  const radio2 = document.getElementById("plan2");
  const textArea = document.getElementById("message").value.trim();
  const terms = document.getElementById("terms").checked;

  let isValid = true;

  if (firstName === "") {
    isValid = false;
    document.querySelector("#firstName").style.border = "1px solid var(--Red-)";
    spanText[0].innerHTML = "this field is required";
  } else {
    document.querySelector("#firstName").style.border =
      "1px solid var(--Green-600-)";
    spanText[0].innerHTML = "";
  }

  if (lastName === "") {
    isValid = false;
    document.querySelector("#lastName").style.border = "1px solid red";
    spanText[1].innerHTML = "this field is required";
  } else {
    document.querySelector("#lastName").style.border =
      " 1px solid var(--Green-600-)";
    spanText[1].innerHTML = "";
  }

  if (email === "") {
    isValid = false;
    document.querySelector("#email").style.border = "1px solid var(--Red-)";
    spanText[2].innerHTML = "Please enter a valid email adress";
  } else {
    document.querySelector("#email").style.border =
      "1px solid var(--Green-600-)";
    spanText[2].innerHTML = "";
  }

  if (textArea === "") {
    isValid = false;
    document.querySelector("#message").style.border = "1px solid var(--Red-)";
    spanText[4].innerHTML = "this field is required";
  } else {
    document.querySelector("#message").style.border =
      "1px solid var(--Green-600-)";
    spanText[4].innerHTML = "";
  }

  if (radio1.checked === false && radio2.checked === false) {
    isValid = false;
    spanText[3].innerHTML = "Please select a query type";
  } else {
    spanText[3].innerHTML = "";
  }

  if (!terms === true) {
    isValid = false;
    spanText[5].innerHTML =
      "To submit this form, please consent to being contacted";
  } else {
    spanText[5].innerHTML = "";
  }

  if (isValid) {
    modal.showModal();
    form.reset();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  return emailRegex.test(email);
}
