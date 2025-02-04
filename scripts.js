function goToWrite() {
    window.location.href = 'write.html'; // Replace 'login.html' with the actual login page URL
}
document.addEventListener("DOMContentLoaded", () => {
    const toggleModeBtn = document.querySelector(".toggle-mode");
    const body = document.body;
    const complaintsContainer = document.getElementById("complaints");
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

    // Default complaints (existing hardcoded ones)
    let complaintsData = [
        {
            id: 1,
            user: "John Doe",
            time: "2h ago",
            text: "Pothole on Main Street causing traffic issues!",
            upvotes: 12,
            comments: 3,
        },
        {
            id: 2,
            user: "Jane Smith",
            time: "5h ago",
            text: "Streetlight not working near Elm Park. It's very dark at night!",
            upvotes: 8,
            comments: 2,
        },
    ];

    // Get stored complaints from localStorage
    const savedComplaints = JSON.parse(localStorage.getItem("complaints")) || [];

    // Merge saved complaints with default ones
    complaintsData = [...savedComplaints, ...complaintsData];

    function renderComplaints() {
        if (!complaintsContainer) return; // Prevent errors if container is missing

        complaintsContainer.innerHTML = ""; // Clear container before rendering
        complaintsData.forEach((complaint, index) => {
            const complaintElement = document.createElement("div");
            complaintElement.className = "complaint";
            complaintElement.innerHTML = `
                <p><strong>${complaint.user}</strong> - <span>${complaint.time}</span></p>
                <p>${complaint.text}</p>
                <button class="button" onclick="upvote(${index})">👍 ${complaint.upvotes}</button>
                <button class="button">💬 ${complaint.comments} Comments</button>
            `;
            complaintsContainer.appendChild(complaintElement);
        });
    }

    // Function to upvote complaints
    window.upvote = function (index) { // Make function globally accessible
        complaintsData[index].upvotes++;
        localStorage.setItem("complaints", JSON.stringify(complaintsData));
        renderComplaints();
    };

    // Initial rendering
    renderComplaints();

    // Mock Resolved Cases Data
    const resolvedCases = [
        "Fixed Potholes in Main Street",
        "Repaired Streetlights in Downtown",
        "Garbage Collection Resumed",
        "Traffic Signals Fixed",
        "Water Leakage Repaired"
    ];

    if (resolvedCasesContainer) {
        resolvedCases.forEach(caseItem => {
            const li = document.createElement("li");
            li.textContent = caseItem;
            resolvedCasesContainer.appendChild(li);
        });
    }
});
