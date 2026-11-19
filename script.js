const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.getElementById("year").textContent = new Date().getFullYear();
const detailToggle = document.querySelector('.detail-toggle');
if (detailToggle) {
  detailToggle.addEventListener('click', () => {
    const detail = document.querySelector('.extra-detail');
    const expanded = detailToggle.getAttribute('aria-expanded') === 'true';
    detailToggle.setAttribute('aria-expanded', String(!expanded));
    detailToggle.textContent = expanded ? 'A little more about my focus +' : 'A little more about my focus −';
    detail.hidden = expanded;
  });
}
