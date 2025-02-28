// edit-event.js
document.addEventListener("DOMContentLoaded", function () {
    const eventId = new URLSearchParams(window.location.search).get("id"); // Get event ID from URL
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const event = events.find(e => e.id == eventId); // Find the event by ID

    if (event) {
        document.getElementById("eventName").value = event.name;
        document.getElementById("eventPlace").value = event.place;
        document.getElementById("eventDate").value = event.date;
        document.getElementById("eventDescription").value = event.description;
    }

    document.getElementById("editEventForm").addEventListener("submit", function (e) {
        e.preventDefault();

        event.name = document.getElementById("eventName").value;
        event.place = document.getElementById("eventPlace").value;
        event.date = document.getElementById("eventDate").value;
        event.description = document.getElementById("eventDescription").value;

        localStorage.setItem("events", JSON.stringify(events));
        window.location.href = "home.html"; // Redirect to home after saving
    });
});

function goBack() {
    window.location.href = "home.html";
}
