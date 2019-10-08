/*
  Listen for click events on the parent
  for buttons not yet created
*/
$('.spoiler').on('click', 'button', (event) => {
  $(event.target).prev().show();
  $(event.target).hide();
  // Note: $(this) does not work with () => {} arrow notation
});

/*
  Create a "Reveal Spoiler" button and
  append it to MANY .spoiler elements
*/
const $button = $('<button>Reveal Spoiler</button>');
$('.spoiler').append($button);

/*
  Hide MANY spoiler text
*/
$('.spoiler span').hide();
