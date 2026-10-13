// Select HTML elements
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close mobile menu
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuBtn.textContent = isOpen ? "✕" : "☰";

});

// Close menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");

        menuBtn.textContent = "☰";

    });

});
// =========================
// APPOINTMENT DEMO FORM
// =========================

const appointmentForm = document.getElementById("appointmentForm");

const appointmentDate = document.getElementById("appointmentDate");

const formMessage = document.getElementById("formMessage");

// Get today's local date
function getLocalDate() {
    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

// Prevent selecting past dates
appointmentDate.min = getLocalDate();

// Form submission
appointmentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("patientName").value.trim();

    const phone = document.getElementById("patientPhone").value.trim();

    const email = document.getElementById("patientEmail").value.trim();

    const department = document.getElementById("department").value;

    const date = appointmentDate.value;

    // Validate phone number
    if (!/^[0-9]{10}$/.test(phone)) {

        formMessage.textContent =
            "Please enter a valid 10-digit phone number.";

        formMessage.className = "form-message error";

        return;
    }

    // Validate date
    if (date < getLocalDate()) {

        formMessage.textContent =
            "Please select today or a future date.";

        formMessage.className = "form-message error";

        return;
    }

    // Demo success message
    formMessage.textContent =
        `Demo preview ready for ${name} — ${department} on ${date}. ` +
        "No appointment has been booked or sent.";

    formMessage.className = "form-message success";

    // Do not log or transmit personal information.
    // Reset form after successful demo preview.
    appointmentForm.reset();

});
// =========================
// DYNAMIC FOOTER YEAR
// =========================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}