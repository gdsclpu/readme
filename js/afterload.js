// Variables
const Form1 = document.getElementById('Form1'),
  Form2 = document.getElementById('Form2'),
  Form3 = document.getElementById('Form3'),
  Form4 = document.getElementById('Form4'),
  Next1 = document.getElementById('Next1'),
  Next2 = document.getElementById('Next2'),
  Next3 = document.getElementById('Next3'),
  Back1 = document.getElementById('Back1'),
  Back2 = document.getElementById('Back2'),
  progress = document.getElementById('progress');

Next1.onclick = function () {
  Form1.style.display= 'none';
  Form2.style.display = 'block';
  progress.style.width = '240px';
};
Back1.onclick = function () {
  Form1.style.display = 'block';
  Form2.style.display = 'none';
  progress.style.width = '125px';
};
Next2.onclick = function () {
  Form2.style.display = 'none';
  Form3.style.display = 'block';
  progress.style.width = '350px';
};
Back2.onclick = function () {
  Form2.style.display = 'block';
  Form3.style.display = 'none';
  progress.style.width = '250px';
};
Next3.onclick = function () {
  Form3.style.display = 'none';
  Form4.style.display = 'block';
  progress.style.width = '500px';
};
Back3.onclick = function () {
  Form3.style.display = 'block';
  Form4.style.display = 'none';
  progress.style.width = '350px';
};
