// Major part: say hi animation
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

// Timeline: animate on scroll to section reveal
function showTimelineOnScroll() {
  const items = document.querySelectorAll('.timeline-item');
  const triggerBottom = window.innerHeight * 0.95;
  items.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if(boxTop < triggerBottom) {
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', showTimelineOnScroll);
// Initial call for already visible items
window.addEventListener('DOMContentLoaded', showTimelineOnScroll);
