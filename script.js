
if (document.getElementById("generalContainer")) {
    const texts = {
        en: {
            login: "Sign In",
            titleDescription: "Movies and series unlimited and more",
            txtDescription: "Starting at $18.900. Cancel anytime.",
            registerTxt: "Do you want to watch Netflix now? Enter your email to create an account or restart your Netflix membership.",
            comenzar: "Start"
        },

        es: {
            login: "Iniciar sesión",
            titleDescription: "Películas y series ilimitadas y más",
            txtDescription: "A partir de $18.900. Cancela cuando quieras.",
            registerTxt: "¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía.",
            comenzar: "Comenzar"
        }
    };

    document.getElementById("languageSelector")
        .addEventListener("change", function () {
            const lang = this.value;

            document.getElementById("login").textContent = texts[lang].login;
            document.getElementById("titleDescription").textContent = texts[lang].titleDescription;
            document.getElementById("txtDescription").textContent = texts[lang].txtDescription;
            document.getElementById("registerTxt").textContent = texts[lang].registerTxt;
            document.getElementById("comenzar").textContent = texts[lang].comenzar;
        });

    const userEmail = document.getElementById("userEmail");
    const btnComenzar = document.getElementById("comenzar");

    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
        userEmail.value = savedEmail;
    }

    // Guardar al hacer click
    btnComenzar.addEventListener("click", () => {
        localStorage.setItem("userEmail", userEmail.value);
        window.location.href = "login.html";

    });


}