// Example of form validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert("Thank you for your message! We will get back to you shortly.");
        // Normally, you would submit the form here
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
