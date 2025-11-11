// Say hi animation
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
    }, 900);
  }, 1600);
});

// Timeline: correct animation and transition logic
function showTimelineOnScroll() {
  const timelineSection = document.getElementById('timeline');
  const container = document.querySelector('.container.main-section');
  const trigger = container.offsetTop + container.offsetHeight * 0.9; // More conservative trigger

  // Only activate timeline when the top of timeline section is actually visible in viewport
  const timelineTop = timelineSection.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (timelineTop < viewportHeight - 100) {
    // Timeline in view, activate transition
    timelineSection.classList.add('visible');
    document.body.classList.add('timeline-active');
    // Animate timeline items
    document.querySelectorAll('.timeline-item').forEach((item, idx) => {
      setTimeout(() => item.classList.add('visible'), 130 * idx);
    });
  } else {
    timelineSection.classList.remove('visible');
    document.body.classList.remove('timeline-active');
    document.querySelectorAll('.timeline-item').forEach((item) => {
      item.classList.remove('visible');
    });
  }
}

window.addEventListener('scroll', showTimelineOnScroll);
window.addEventListener('resize', showTimelineOnScroll);
window.addEventListener('DOMContentLoaded', showTimelineOnScroll);
