const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const email = document.getElementById("email").value.trim();

    if (email === "") {
        alert("Por favor ingresa tu email o número");
        return;
    }

    localStorage.setItem("userEmail", email);

    window.location.replace("perfil.html");
});
