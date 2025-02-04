function goToIndex() {
    window.location.href = 'index.html'; // Replace 'login.html' with the actual login page URL
}
document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");
    const postTitle = document.getElementById("postTitle");
    const postDescription = document.getElementById("postDescription");
    const postImage = document.getElementById("postImage");
    const postCategory = document.getElementById("postCategory");

    postForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Validate fields
        if (postTitle.value.trim() === "" || postDescription.value.trim() === "") {
            alert("Title and Description are required!");
            return;
        }

        // Prepare complaint data
        const newComplaint = {
            id: Date.now(),
            user: "Anonymous", // Can be replaced later with real user data
            time: "Just now",
            text: postTitle.value + " - " + postDescription.value,
            category: postCategory.value,
            upvotes: 0,
            comments: 0,
        };

        // Get existing complaints from localStorage
        let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

        // Add new complaint
        complaints.unshift(newComplaint);

        // Save back to localStorage
        localStorage.setItem("complaints", JSON.stringify(complaints));

        // Redirect to index.html to see the updated feed
        window.location.href = "index.html";
    });
});

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
