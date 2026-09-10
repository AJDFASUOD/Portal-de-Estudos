
const search = document.getElementById('search');
const cards = [...document.querySelectorAll('.card')];
search.addEventListener('input', () => {
  const q = search.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();
  cards.forEach(card => {
    const text = (card.innerText + ' ' + card.dataset.tags).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    card.classList.toggle('hidden', !text.includes(q));
  });
});
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('light') ? '☀' : '☾';
});
