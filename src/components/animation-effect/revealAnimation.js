export default function revealAnimation() {
  const hiddenItems = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } 
      else {
        entry.target.classList.remove("show");
      }
    });
  });

  hiddenItems.forEach((el) => {
    observer.observe(el);
  });
}
