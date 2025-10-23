$(document).ready(function() {
    const centerSound = document.getElementById('center-sound');
    
    $(document).one('click touchstart', function() {
      // Hide tap message
      $('.tap-message').addClass('hidden');
  
      // Play sound only for center curtain
        // centerSound.currentTime = 5;
        console.log(`Current time is: ${parseFloat(centerSound.currentTime)} seconds`);
        centerSound.play();
      // Erase center curtain first
      $('.curtain.center').addClass('erase');
      
      // After center curtain erases, open left & right curtains
      setTimeout(function() {
        $('.curtain.center').addClass('hidden');
        $('.curtain.left').addClass('open');
        $('.curtain.right').addClass('open');
        $('.invitation').addClass('show');
      }, 1000); // Match the center curtain transition duration
    });

    function closeCurtain() {
        $('.curtain.left').removeClass('open');
        $('.curtain.right').removeClass('open');
    
        setTimeout(function() {
          $('.curtain.center').removeClass('erase');
          $('.tap-message').removeClass('hidden');
          $('.close-btn').hide();
    
          centerSound.currentTime = 0;
          centerSound.play();
        }, 1000); // wait for left/right curtains to slide back
      }

      $('.rsvp-yes').click(function() {
        alert('Thank you for confirming! We look forward to celebrating with you.');
        window.open('https://wa.me/6281240059658?text=For%20sure,%20I%27ll%20Be%20there%20-%20'+ getGuestName() +'', '_blank')
        $(this).css({
            'background': '#4CAF50',
            'color': '#fff'
        });
        $('.rsvp-no').css('opacity', '0.5');
        $('.rsvp-yes').prop("disabled", true);
        $('.rsvp-no').prop("disabled", true);
    });
    
    $('.rsvp-no').click(function() {
        alert('We\'re sorry you can\'t make it. Thanks for letting us know!');
        window.open('https://wa.me/6281240059658?text=Happy%20belated%20birthday%21%20I%27m%20so%20sorry%20I%20can%27t%20make%20it%2C%20but%20I%20hope%20you%20had%20a%20fantastic%20day%20-%20'+ getGuestName() +'', '_blank')
        $(this).css({
            'background': '#f44336',
            'color': '#fff'
        });
        $('.rsvp-yes').css('opacity', '0.5');
        $('.rsvp-yes').prop("disabled", true);
        $('.rsvp-no').prop("disabled", true);

    });
  });
  