 document.addEventListener("DOMContentLoaded", function(event) {    
   const togglePassword = document.getElementById("togglePassword");
    const togglePassword1 = document.getElementById("togglePassword1");
    const password = document.getElementById("password");
    
    togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    togglePassword.classList.toggle('d-none');
    togglePassword1.classList.toggle('d-block');
    });
    
    togglePassword1.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    togglePassword.classList.toggle('d-none');
    togglePassword1.classList.toggle('d-block');
     });

  });