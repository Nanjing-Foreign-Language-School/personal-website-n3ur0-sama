document.getElementById('sayHiBtn').addEventListener('click', function() {
  const hiMsg = document.getElementById('hiMessage');
  hiMsg.textContent = "👋 Hi there! Thanks for visiting my site!";
  hiMsg.style.opacity = 1;
  hiMsg.style.transition = "opacity 0.4s";
  setTimeout(() => {
    hiMsg.style.opacity = 0.4;
    setTimeout(() => {
      hiMsg.style.opacity = 0;
      hiMsg.textContent = "";
    }, 1000);
  }, 1800);
});
