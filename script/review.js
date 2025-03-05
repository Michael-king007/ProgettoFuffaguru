let reviews = [];
let currentIndex = 0;

fetch("../db.json") 
    .then(response => response.json()) 
    .then(data => {
        reviews = data.reviews; 
        displayReview(); 
        setInterval(switchReview, 5000); 
    })
    .catch(error => console.error("Error loading JSON:", error));

function displayReview() {
    const container = document.getElementById("review-container");
    const review = reviews[currentIndex];

    let stars = "⭐".repeat(review.rating);

    // Create the review HTML
    container.innerHTML = `
        <div class="top">
            <img src="${review.profileImage}" alt="${review.name}'s profile image" class="profile-image">
            <div class="container">
                <h1>${review.name}, ${review.age} Anni</h1>
                <p>${stars}</p>
            </div>
        </div>
        <div class="bottom">
            <p>${review.shortReview}</p>
            <p>"${review.fullReview}"</p>
        </div>
    `;
}

function switchReview() {
    const container = document.getElementById("review-container");

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % reviews.length;
        displayReview();
    }, 500);
}