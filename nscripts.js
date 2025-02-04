function goToIndex() {
    window.location.href = 'index.html'; // Replace 'login.html' with the actual login page URL
}
document.addEventListener("DOMContentLoaded", () => {
    const toggleModeBtn = document.querySelector(".toggle-mode");
    const body = document.body;
    const postsContainer = document.querySelector(".posts");
    const resolvedCasesContainer = document.querySelector(".resolved-cases");

    // Light/Dark Mode Toggle
    toggleModeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            toggleModeBtn.textContent = "🌙";
            body.style.backgroundColor = "#222";
            body.style.color = "white";
        } else {
            toggleModeBtn.textContent = "☀️";
            body.style.backgroundColor = "#f5f5f5";
            body.style.color = "black";
        }
    });

    // Mock Complaints Data

renderComplaints();
    // Mock Resolved Cases Data
    const resolvedCases = [
        "Fixed Potholes in Main Street",
        "Repaired Streetlights in Downtown",
        "Garbage Collection Resumed",
        "Traffic Signals Fixed",
        "Water Leakage Repaired"
    ];

    resolvedCases.forEach(caseItem => {
        const li = document.createElement("li");
        li.textContent = caseItem;
        resolvedCasesContainer.appendChild(li);
    });
});