$(document).ready(function() {
    setTimeout(() => {
        $('.invitation-card').css({'opacity': 1});
    }, 200);
});
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
$
// Get guest name from URL parameter
function getGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    const guest = urlParams.get('guest');
    return guest ? decodeURIComponent(guest) : 'Friend';
}

// Set guest name
$('#guestName').text('Dear, ' + getGuestName());

const message1 = "Dear, " + getGuestName();
const message2 = "You've been invited to my birthday party";

let currentChar = 0;
let typingSpeed = 80;
let lineDelay = 800;

function typeText(element, text, callback) {
    if (currentChar < text.length) {
        element.textContent += text[currentChar];
        currentChar++;
        setTimeout(() => typeText(element, text, callback), typingSpeed);
    } else {
        currentChar = 0;
        element.classList.add('completed-line');
        if (callback) setTimeout(callback, lineDelay);
    }
}

function startTyping() {
    typeText(line1, message1, () => {
        typeText(line2, message2, () => {
            revealBtn.style.opacity = "1";
        });
    });
}

// Start typing animation
setTimeout(startTyping, 500);

$('.revealBtn').addCss({'opacity': 1})
