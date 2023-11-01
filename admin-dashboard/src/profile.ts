document.addEventListener("DOMContentLoaded", () => {
    // Fetch user data from the backend API
    fetch("/api/user-profile") // Replace with the actual endpoint
        .then(response => response.json())
        .then(data => {
            // Update the user details in the profile card
            const userNameElement = document.getElementById("userName") as HTMLSpanElement;
            const userEmailElement = document.getElementById("userEmail") as HTMLSpanElement;
            const userPhoneElement = document.getElementById("userPhone") as HTMLSpanElement;

            userNameElement.textContent = data.name;
            userEmailElement.textContent = data.email;
            userPhoneElement.textContent = data.phone;
        })
        .catch(error => {
            console.error("Error fetching user data: " + error);
        });

    // Other code for profile page and user data retrieval

    const logoutButton = document.getElementById("logout-button") as HTMLButtonElement;

    logoutButton.addEventListener("click", () => {
        // Perform the logout action (e.g., clear session or token)

        // Redirect the user to the landing page
        window.location.href = "landing.html"; // Replace with the actual URL of your landing page
    });
});
