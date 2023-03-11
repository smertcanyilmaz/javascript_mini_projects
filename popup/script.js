const btn = document.getElementById('btn');
const btn_ok = document.getElementById('btn-ok');
const container = document.getElementById('container');

btn.addEventListener('click', function () {
  container.style.visibility = 'visible';
  container.style.transform = 'translate(-50%, -50%) scale(1)';
  container.style.top = '50%';
});

btn_ok.addEventListener('click', function () {
  container.style.visibility = 'hidden';
  container.style.transform = '';
  container.style.top = '';
});
