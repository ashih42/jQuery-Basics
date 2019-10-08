const $odd = $('a:odd');
$odd.css('backgroundColor', 'lightgrey');

/*
  All links starting with "https://"
*/
const $secureLinks = $('a[href^="https://"]');
$secureLinks.attr('target', '_blank');
$secureLinks.addClass('secure');

/*
  All links ending in ".pdf"
*/
const $pdfs = $('a[href$=".pdf"]');
$pdfs.attr('download', true);
$pdfs.addClass('pdf');

/*
  Create a checkbox and append links div
*/
const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');
$('#links').append($pdfCheckbox);

/*
  Set all pdf links to download only if checkbox is checked
*/
$pdfs.on('click', (event) => {
  if ($(':checked').length === 0) {
    event.preventDefault();
    alert('Please check the box to allow PDF downloads.');
  }
});

/*
  For each link, grab the href and add it as a sibling
*/
$('a').each(function() {
  const url = $(this).attr('href');
  $(this).parent().append(`(${url})`);
  // Note: $(this) does not work with () => {} arrow notation
});
