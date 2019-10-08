$('#flashMessage').hide();

$('#previewButton').click(() => {
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();
  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);

  // Animate the flash message
  $('#flashMessage')
    .slideDown(1000)
    .delay(1000)
    .slideUp();
});
