// Check if PDF object loaded correctly
document.querySelector('object').addEventListener('error', function() {
  document.querySelector('.error-container').style.display = 'flex';
});