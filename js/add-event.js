// add-event.js
document.addEventListener("DOMContentLoaded", function () {
    const eventForm = document.getElementById("eventForm");

    eventForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const eventName = document.getElementById("eventName").value;
        const eventPlace = document.getElementById("eventPlace").value;
        const eventDate = document.getElementById("eventDate").value;
        const eventDescription = document.getElementById("eventDescription").value;
        const mainImage = document.getElementById("mainImage").src;

        const eventImages = [];
        const thumbnailDivs = document.querySelectorAll(".thumbnail img");
        thumbnailDivs.forEach(thumbnail => {
            eventImages.push(thumbnail.src); // Push the image src to the event's images array
        });

        const newEvent = {
            id: Date.now(),  // Unique ID for the event
            name: eventName,
            place: eventPlace,
            date: eventDate,
            description: eventDescription,
            mainImage: mainImage,
            images: eventImages  // Store all images
        };

        let events = JSON.parse(localStorage.getItem("events")) || [];
        events.push(newEvent);
        localStorage.setItem("events", JSON.stringify(events));

        window.location.href = "home.html"; // Redirect to home page
    });
});

function goBack() {
    window.location.href = "home.html";
}

function uploadImages() {
    const fileInput = document.getElementById("imageUpload");
    const mainImage = document.getElementById("mainImage");
    const thumbnailsContainer = document.getElementById("imageThumbnails");

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            mainImage.src = e.target.result; // Update the main image preview
        };
        reader.readAsDataURL(file);
    }

    thumbnailsContainer.innerHTML = "";
    Array.from(fileInput.files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const thumbnail = document.createElement("div");
            thumbnail.classList.add("thumbnail");
            thumbnail.innerHTML = `<img src="${e.target.result}" alt="Image ${index + 1}">
                                   <button class="remove-img-btn" onclick="removeImage(${index})">×</button>`;
            thumbnailsContainer.appendChild(thumbnail);
        };
        reader.readAsDataURL(file);
    });
}

function removeImage(index) {
    const thumbnailsContainer = document.getElementById("imageThumbnails");
    thumbnailsContainer.children[index].remove();
}
