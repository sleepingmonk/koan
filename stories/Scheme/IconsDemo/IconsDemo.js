function docReady(fn) {
  // See if DOM is already available.
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // Call on next available tick.
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  const iconItems = document.querySelectorAll('.icon__item');

  iconItems.forEach(item => {
    if (!item.classList.contains('js-icon')) {
      item.classList.add('js-icon');

      item.addEventListener('click', () => {
        const iconName = item.getAttribute('data-icon-name');
        navigator.clipboard.writeText(iconName).then(() => {
          // Optionally, provide feedback to the user that the text has been copied
          console.log(`Copied ${iconName} to clipboard`);
          item.classList.add('icon__item--copied');

          setTimeout(() => {
            item.classList.remove('icon__item--copied');
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      });
    }
  });
});
