// Detect if user is on a mobile device
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// If on mobile, show download option immediately
if (isMobileDevice()) {
  document.querySelector('.pdf-container').style.display = 'none';
  document.querySelector('.error-container').style.display = 'flex';
} else {
  // For desktop: Check if PDF object loaded correctly
  document.querySelector('object').addEventListener('error', function() {
    document.querySelector('.error-container').style.display = 'flex';
  });
}