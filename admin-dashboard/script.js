document.addEventListener("DOMContentLoaded", function() {
    const assignNewProjectButton = document.getElementById("assignNewProjectButton");
    const assignProjectForm = document.getElementById("assignProjectForm");
    const projectForm = document.getElementById("projectForm");
    const projectTable = document.querySelector(".project-table");

    assignNewProjectButton.addEventListener("click", function() {
        assignProjectForm.style.display = "block";
    });

    // Close the pop-up form
    assignProjectForm.addEventListener("click", function(event) {
        if (event.target === assignProjectForm) {
            assignProjectForm.style.display = "none";
        }
    });

    // Handle form submission
    projectForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const projectID = document.getElementById("projectID").value;
        const projectName = document.getElementById("projectName").value;
        const projectDescription = document.getElementById("projectDescription").value;
        const projectAssignedTo = document.getElementById("projectAssignedTo").value;
        const completionDate = document.getElementById("completionDate").value;

        // Create a new row for the project in the table
        const newRow = projectTable.insertRow(-1);
        const cells = Array.from({ length: 6 }, () => newRow.insertCell());

        cells[0].textContent = projectID;
        cells[1].textContent = projectName;
        cells[2].textContent = projectDescription;
        cells[3].textContent = projectAssignedTo;
        cells[4].textContent = completionDate;
        cells[5].innerHTML = '<button class="edit-button">Edit</button><button class="delete-button">Delete</button>';

        // Clear input fields and hide the form
        projectForm.reset();
        assignProjectForm.style.display = "none";
    });
});
