document.addEventListener("DOMContentLoaded", function () {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    let currentIndex = 0;
    const mainImage = document.getElementById("mainImage");
    const indicators = document.getElementById("carouselIndicators");
    
    function updateCarousel(index) {
        mainImage.src = images[index];
        document.querySelectorAll(".indicator").forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }
    
    images.forEach((img, index) => {
        const dot = document.createElement("div");
        dot.classList.add("indicator");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel(index);
        });
        indicators.appendChild(dot);
    });
    function updateMainImage() {
        mainImage.src = images[currentIndex];
    }
    
    // Call the function on page load
    updateMainImage();

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
    }
    
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel(currentIndex);
    }
    
    const nextButton = document.createElement("button");
    nextButton.innerText = ">";
    nextButton.classList.add("carousel-btn", "next");
    nextButton.addEventListener("click", nextImage);
    
    const prevButton = document.createElement("button");
    prevButton.innerText = "<";
    prevButton.classList.add("carousel-btn", "prev");
    prevButton.addEventListener("click", prevImage);
    
    document.querySelector(".image-carousel").appendChild(prevButton);
    document.querySelector(".image-carousel").appendChild(nextButton);
    
    setInterval(nextImage, 3000); // Auto-slide every 3 seconds
    updateCarousel(0);
    
    document.getElementById("joinEvent").addEventListener("click", function () {
        alert("You have joined the event!");
    });
    
    document.getElementById("editEvent").addEventListener("click", function () {
        alert("Edit event functionality coming soon!");
    });
});