$(document).ready(function() {
   

    
    // Envelope opening animation
    $('.open-btn, .envelope-container').click(function() {
        $('.open-btn').css({'display': 'hidden'})
        $('.envelope').addClass('open');
        
        // Create confetti
        createConfetti();
        
        // Show invitation after envelope animation
        setTimeout(function() {
            $('#invitation').addClass('show');
        }, 1300);
        // Hide the envelope after animation
        setTimeout(function() {
            $('.envelope-container').css({
                'position':'absolute',
                'top': '-999'
            });
        }, 1000);
        
        // Hide the envelope after animation
        setTimeout(function() {
            $('.envelope-container').css({
                'opacity': '0',
                'pointer-events': 'none',
            });
        }, 1400);
        

    });
    
    // RSVP button actions
    $('.rsvp-yes').click(function() {
        alert('Thank you for confirming! We look forward to celebrating with you.');
        $(this).css({
            'background': '#4CAF50',
            'color': '#fff'
        });
        $('.rsvp-no').css('opacity', '0.5');
    });
    
    $('.rsvp-no').click(function() {
        alert('We\'re sorry you can\'t make it. Thanks for letting us know!');
        $(this).css({
            'background': '#f44336',
            'color': '#fff'
        });
        $('.rsvp-yes').css('opacity', '0.5');
    });
});