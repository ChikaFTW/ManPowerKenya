document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".philippines-tabs li");
  const tabArticles = document.querySelectorAll(".philippines-content article");

  tabLinks.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active
      tabLinks.forEach((t) => t.classList.remove("active"));
      tabArticles.forEach((content) => content.classList.remove("active"));

      // Add active
      this.classList.add("active");
      const targetId = this.querySelector("a").getAttribute("href");
      document.querySelector(targetId).classList.add("active");
    });
  });

  // Optional: Trigger the first tab on load
  if (tabLinks.length) {
    tabLinks[0].click();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.tab-button');
  const panes = document.querySelectorAll('.tab-pane');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab');

      // Toggle buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Toggle content
      panes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.id === target) {
          pane.classList.add('active');
        }
      });
    });
  });
});

