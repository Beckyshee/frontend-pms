// Custom DateCheck function
function DateCheck(input: HTMLInputElement): boolean {
    const currentDate = new Date();
    const selectedDate = new Date(input.value);

    return selectedDate >= currentDate;
}

document.addEventListener("DOMContentLoaded", () => {
    const createProjectButton = document.getElementById("createProjectButton") as HTMLButtonElement;
    const projectTable = document.querySelector(".project-table") as HTMLTableElement;
    const projectNameInput = document.getElementById("projectName") as HTMLInputElement;
    const projectDescriptionInput = document.getElementById("projectDescription") as HTMLTextAreaElement;
    const projectAssignedToSelect = document.getElementById("projectAssignedTo") as HTMLSelectElement;
    const completionDateInput = document.getElementById("completionDate") as HTMLInputElement;

    createProjectButton.addEventListener("click", () => {
        // Show the pop-up form
        const createProjectForm = document.getElementById("createProjectForm") as HTMLDivElement;
        createProjectForm.style.display = "block";

        const doneButton = document.getElementById("doneButton") as HTMLButtonElement;

        doneButton.addEventListener("click", () => {
            // Use the custom DateCheck function for validation
            if (DateCheck(completionDateInput)) {
                const projectName = projectNameInput.value;
                const projectDescription = projectDescriptionInput.value;
                const assignedTo = projectAssignedToSelect.value;
                const completionDate = completionDateInput.value;

                // Create a new row for the project in the table
                const newRow = projectTable.insertRow(-1);
                const [idCell, nameCell, descriptionCell, assignedToCell, dateCell, actionsCell] = Array.from({ length: 6 }, () => newRow.insertCell());

                idCell.textContent = String(projectTable.rows.length - 1);
                nameCell.textContent = projectName;
                descriptionCell.textContent = projectDescription;
                assignedToCell.textContent = assignedTo;
                dateCell.textContent = completionDate;
                actionsCell.innerHTML = '<button class="edit-button">Edit</button><button class="delete-button">Delete</button>';

                // Clear input fields
                projectNameInput.value = "";
                projectDescriptionInput.value = "";
                projectAssignedToSelect.value = "";
                completionDateInput.value = "";

                // Hide the pop-up form
                createProjectForm.style.display = "none";
            } else {
                alert("Completion date cannot be in the past.");
            }
        });
    });
});
