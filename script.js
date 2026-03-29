const revealed = document.querySelectorAll(".reveal");
if (!("IntersectionObserver" in window)) {
  revealed.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealed.forEach((element) => observer.observe(element));
}
