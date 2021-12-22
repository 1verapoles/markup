 document.addEventListener("DOMContentLoaded", function(event) {
    
    const tp = document.getElementById("tp");
    const tp1 = document.getElementById("tp1");
    const ps = document.getElementById("passwordSignIn");
    
    tp.addEventListener("click", function () {
    const type = ps.getAttribute("type") === "password" ? "text" : "password";
    ps.setAttribute("type", type);
    tp.classList.toggle('d-none');
    tp1.classList.toggle('d-block');
    });
    
    tp1.addEventListener("click", function () {
    const type = ps.getAttribute("type") === "password" ? "text" : "password";
    ps.setAttribute("type", type);
    tp.classList.toggle('d-none');
    tp1.classList.toggle('d-block');
     });
    
  });