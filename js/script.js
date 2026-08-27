const dropdownButton = document.querySelector('.profile-button');
const dropdown = document.querySelector('.profile-dropdown');

dropdownButton.addEventListener('click', () => {
  dropdown.classList.toggle('is-active');
})

document.addEventListener('click', e => {
  if (!dropdown.contains(e.target) && e.target !== dropdownButton) {
    dropdown.classList.remove('is-active');
  }
})
