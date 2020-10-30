$(document).ready(function() {

  $('.color-choice input').on('click', function() {
      let colorSelection = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + colorSelection + ']').addClass('active');
      $(this).addClass('active');
  });
});
