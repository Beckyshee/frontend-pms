// JavaScript code to handle the assigned project and its status

// Function to set the project name (you can fetch this from your server)
function setProjectName(projectName) {
    const projectNameElement = document.getElementById('project-name');
    projectNameElement.textContent = projectName;
}

// Function to handle the "Complete" button click
document.querySelector('.complete-button').addEventListener('click', () => {
    // Handle project completion logic here
    alert('Project marked as Complete');
});

// Function to handle the "Pending" button click
document.querySelector('.pending-button').addEventListener('click', () => {
    // Handle project pending logic here
    alert('Project marked as Pending');
});

// Example: Set the project name (you can fetch this from your server)
setProjectName('Assigned Project 1');
