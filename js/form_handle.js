async function initializeForm() {
    try {
        // Wait for EmailJS to load
        if (!window.emailjs) {
            throw new Error('EmailJS not loaded');
        }

        // Initialize EmailJS
        emailjs.init("egv1iLa5aLCJCcjbV");

        const form = document.getElementById("contact-form");
        const submitButton = document.getElementById("submit-btn");

        if (!form || !submitButton) {
            throw new Error('Form elements not found');
        }

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            try {
                submitButton.innerText = "Sending...";
                submitButton.disabled = true;

                // Send the form
                await emailjs.sendForm(
                    "service_tgnpbeh",
                    "template_twruvi8",
                    form
                );

                console.log("Email sent successfully");
                submitButton.innerText = "Success!";
                form.reset();
            } catch (error) {
                console.error("Email sending failed:", error);
                submitButton.innerText = "Failed: " + (error.text || "Unknown error");
            } finally {
                submitButton.disabled = false;
            }
        });
    } catch (error) {
        console.error("Initialization error:", error);
    }
}

// Run initialization when DOM is ready
document.addEventListener("DOMContentLoaded", initializeForm);