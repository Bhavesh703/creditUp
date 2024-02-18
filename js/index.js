// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//year
document.getElementById("year").innerHTML = new Date().getFullYear();

window.addEventListener("scroll", function () {
  let scrolldiv = document.getElementById("scroll");
  if (document.documentElement.scrollTop > 50) {
    scrolldiv.style.display = "block";
  } else {
    scrolldiv.style.display = "none";
  }
});
