'use strict';

jQuery(function () {
  (function ($) {
    let lost = false;
    let gameStarted = false;

    $('.boundary').on('mouseover', lose);
    $('#maze').on('mouseleave', lose);
    $('#start').on('click', reset);
    $('#end').on('mouseover', endGame);

    function reset() {
      gameStarted = true;
      lost = false;
      $('.boundary').removeClass('youlose');
      $('.boundary').removeClass('youwin');
      $('#status').text(
        'Move cursor across white path until you reach "END". '
      );
    }

    function lose() {
      if (gameStarted) {
        $('.boundary').addClass('youlose');
        lost = true;
      }
    }

    function endGame() {
      if (gameStarted) {
        if (!lost) {
          $('#status').text('You win :)');
          $('.boundary').addClass('youwin');
        } else {
          $('#status').text('You lose :(');
        }
      }
    }
  })(jQuery);
});
