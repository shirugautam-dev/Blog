document.addEventListener("DOMContentLoaded", () => {

    const panel = document.getElementById("floating-subscribe-panel");
    const subscribeLink = document.querySelector(".nav-subscribe-trigger");

    if (!panel || !subscribeLink) return;

    const close = panel.querySelector(".floating-subscribe-close");
    const formContainer = panel.querySelector(".floating-subscribe-form");

    subscribeLink.addEventListener("click", (event) => {

        event.preventDefault();

        panel.classList.add("is-open");

        if (!formContainer.dataset.loaded) {

            const script = document.createElement("script");

            script.async = true;
            script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
            script.setAttribute(
                "data-beehiiv-form",
                "f967ff6b-901e-495b-bafb-c64aa4ab7863"
            );

            formContainer.appendChild(script);

            formContainer.dataset.loaded = "true";
        }

    });

    close.addEventListener("click", () => {
        panel.classList.remove("is-open");
    });

});