$('button.scrollsomething').on('click', function() {
  $.smoothScroll({
    scrollElement: $('.buttonToSelect'),
    scrollTarget: '#moodSelection'
  });
  return false;
});
