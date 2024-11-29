// script.js

// Like Button Functionality
const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const likeCountSpan = button.querySelector('.like-count');
        let likeCount = parseInt(likeCountSpan.textContent, 10);
        likeCount += 1;
        likeCountSpan.textContent = likeCount;
    });
});

// Comment Button Functionality
const commentButtons = document.querySelectorAll('.comment-button');

commentButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Comment functionality is not implemented yet!');
    });
});

// Share Button Functionality
const shareButtons = document.querySelectorAll('.share-button');

shareButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Share functionality is not implemented yet!');
    });
});

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending message
    alert(`Thank you, ${name}! Your message has been sent to the owner.\n\nDetails:\n- Email: ${email}\n- Message: ${message}`);

    // Reset the form
    document.getElementById('contactForm').reset();
});
