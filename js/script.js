// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

    // ----- FORM VALIDATION -----
    const form = document.querySelector(".registration-form");
    if (form) {
        const successMsg = form.querySelector(".success-msg");
        const errorMsg = form.querySelector(".error-msg");

        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent default submission

            // Simple validation: check if all inputs are filled
            const inputs = form.querySelectorAll("input, select");
            let valid = true;

            inputs.forEach(input => {
                if (input.hasAttribute("required") && !input.value) {
                    valid = false;
                }
            });

            if (valid) {
                successMsg.style.display = "block";
                errorMsg.style.display = "none";
                form.reset();
            } else {
                errorMsg.style.display = "block";
                successMsg.style.display = "none";
            }
        });
    }

    // ----- PORTFOLIO BUTTON HOVER -----
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });

    // ----- NAVIGATION ACTIVE LINK -----
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

});